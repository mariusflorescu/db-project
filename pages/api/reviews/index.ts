import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   try {
        if(req.method === 'POST') {
            const {firstname, lastname, title, description, movie_id} = req.body;

            let errors:any = {};
            if(!firstname) errors.firstname = 'Firstname must not be empty'
            if(!lastname) errors.lastname = 'Lastname must not be empty'
            if(!title) errors.title = 'Title must not be empty'
            if(!description) errors.description = 'Description must not be empty'
            if(!movie_id) errors.movie_id = 'Movie ID must not be empty'

            if(Object.keys(errors).length > 0) {
                return res.status(400).json(errors)
            }

            const result = await prisma.reviews.create({
                data: {
                    firstname,
                    lastname,
                    title,
                    description,
                    movie_id
                }
            })

            return res.status(201).json(result)
        }
   } catch (err) {
       return res.status(500).json("Something went wrong")
   }
}