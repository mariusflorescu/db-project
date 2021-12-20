import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
       if(req.method === 'POST') {
           const { movie_id, genres } = req.body;

            const mapGenresToActors = genres.map((genre:any) => {
                return {
                    genre_id: genre,
                    movie_id
                }
            })

            const result = await prisma.genresToMovies.createMany({
                data: mapGenresToActors
            })

            return res.status(201).json(result)
       } else if(req.method === 'PUT') {
           const {movie_id, genres} = req.body;

            const mapGenresToActors = genres.map((genre:any) => {
                return {
                    genre_id: genre,
                    movie_id
                }
            })

            await prisma.genresToMovies.deleteMany({
                where: {
                    movie_id
                }
            })

            const createdGenresToMovies = await prisma.genresToMovies.createMany({
                data: mapGenresToActors
            })

            return res.status(200).json(createdGenresToMovies)
       }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}