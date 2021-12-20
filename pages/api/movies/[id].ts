import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {id} = req.query

    try{
       if(req.method === "GET"){
            const result = await prisma.movies.findUnique({
                where: {
                    id: Number(id)
                },
                 include: {
                    genres: {
                        select: {
                            genre: true
                        }
                    },
                    actors: {
                        select: {
                            actor: true
                        }
                    },
                    director: true,
                    reviews: true
                },
            });

           return res.status(200).json(result)
       }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}