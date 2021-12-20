import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
        let title = '';
        if(req.query && req.query.title) {
            title = req.query.title
        }

       if(req.method === "GET"){
            const result = await prisma.movies.aggregate({
                where:{
                    title: {
                        startsWith: title
                    }
                },
                _count: {
                    title: true
                }
            })

            const maxPages = Math.ceil(result._count.title/4);

            return res.status(200).json(maxPages);
       }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}