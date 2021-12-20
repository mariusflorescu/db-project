import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
        if(req.method === 'GET'){
            let result:any = [];
            const actors = await prisma.actors.findMany()

            for(const actor of actors) {
                const countActor = await prisma.actorsToMovies.aggregate({
                    where: {
                        actor_id:actor.id
                    },
                    _count: {
                        movie_id: true
                    }
                })
                const count = countActor._count.movie_id;
                result = [...result, {
                        ...actor,
                        count
                    }]
            }

            return res.status(200).json(result)
        } else if(req.method === 'POST'){
            const {firstname, lastname, birth_date} = req.body;

            const result = await prisma.actors.create({
                data: {
                    firstname,
                    lastname,
                    birth_date,
                }
            })

            return res.status(201).json(result)
        }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}