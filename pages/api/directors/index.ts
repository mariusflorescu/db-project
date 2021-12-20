import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
        if(req.method === 'GET'){
            const result = await prisma.directors.findMany({})

            return res.status(200).json(result)
        } else if(req.method === 'POST'){
            const {firstname, lastname, birth_date} = req.body;

            const result = await prisma.directors.create({
                data: {
                    firstname,
                    lastname,
                    birth_date
                }
            })

            return res.status(201).json(result)
        }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}