import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
       if(req.method === "GET"){
            const result = await prisma.movies.findMany({
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
                    }
                }
            })


           return res.status(201).json(result)
       } else if(req.method === "POST") {
            const {title, description, release_date, director_id, genres, actors } = req.body
            let errors:any = {}

            if(!title) errors.title = 'Title must not be empty'
            if(!description) errors.description = 'Description must not be empty'
            if(!release_date) errors.release_date = 'Release date must not be empty'
            if(!director_id) errors.director_id = 'Director ID must not be empty'

            if(Object.keys(errors).length > 0) return res.status(400).json(errors)

            const createdMovie = await prisma.movies.create({
                data: {
                    title,
                    description,
                    release_date,
                    director_id,
                }
            })

            if(genres && genres.length) {
                const genresToMovies = genres.map((genre:any) => {
                return {
                    movie_id: createdMovie.id,
                    genre_id: genre
                }
            })

            await prisma.genresToMovies.createMany({
                data: genresToMovies
            })
            }

            if(actors && actors.length) {
                const actorsToMovies = actors.map((actor:any) => {
                return {
                    movie_id: createdMovie.id,
                    actor_id: actor
                }
            })

            await prisma.actorsToMovies.createMany({
                data: actorsToMovies
            })
            }

            const result = await prisma.movies.findUnique({
                where: {
                    id: createdMovie.id
                },
                include: {
                    genres: true,
                    actors: true
                }
            })

            return res.status(201).json(result)
       }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}