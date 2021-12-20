import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
        if(req.method === 'GET'){
            const result = await prisma.genres.findMany()

            return res.status(200).json(result);
        } else if(req.method === 'POST') {
            const { name } = req.body;
            if(!name || name.trim() === '') return res.status(400).json('Name must not be empty');

            const result = await prisma.genres.create({
                data: {
                    name
                }
            })

            return res.status(201).json(result)
        }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}