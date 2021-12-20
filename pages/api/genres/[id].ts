import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {id} = req.query;

    try{
       if(req.method === 'GET'){
        const result = await prisma.genres.findUnique({
            where: {
                id: Number(id)
            }
        })

        return res.status(200).json(result);
       } else if(req.method === 'PUT'){
        const { name } = req.body;

        const updatedGenre = await prisma.genres.update({
            where: {
                id: Number(id)
            },
            data: {
                name
            }
        })

        return res.status(200).json(updatedGenre)
       } else if(req.method === 'DELETE') {
        const result = await prisma.genres.delete({
            where:{
                id: Number(id)
            }
        })

        return res.status(200).json(result);
       }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}