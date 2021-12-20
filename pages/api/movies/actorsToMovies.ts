import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
       if(req.method === 'POST') {
           const { movie_id, actors } = req.body;

            const mapMovieToActors = actors.map((actor:any) => {
                return {
                    actor_id: actor,
                    movie_id
                }
            })

            const result = await prisma.actorsToMovies.createMany({
                data: mapMovieToActors
            })

            return res.status(201).json(result)
       } else if(req.method === 'PUT') {
           const {movie_id, actors} = req.body;

            const mapMovieToActors = actors.map((actor:any) => {
                return {
                    actor_id: actor,
                    movie_id
                }
            })

            await prisma.actorsToMovies.deleteMany({
                where: {
                    movie_id
                }
            })

            const createdActorsToMovies = await prisma.actorsToMovies.createMany({
                data: mapMovieToActors
            })

            return res.status(200).json(createdActorsToMovies)
       }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}