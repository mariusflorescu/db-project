import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {query} = req;
    let pageNumber = 0;
    if(query && query.page) {
        pageNumber = (Number(query.page)-1) * 4;
    }

    let search = '';
    if(query && query.title) {
        search = query.title;
    }

    try{
       if(req.method === "GET"){
            const result = await prisma.movies.findMany({
                where: {
                    title: {
                        startsWith: search
                    }
                },
                include: {
                    genres: {
                        select: {
                            genre: true
                        }
                    }
                },
                take: 4,
                skip: pageNumber
            })

           return res.status(201).json(result)
       }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}