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
            const result = await prisma.directors.findUnique({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json(result)
        } else if(req.method === 'PUT') {
            const {firstname, lastname, birth_date} = req.body;
            let errors:any = {};

            if(!firstname || firstname.trim() === '') errors.firstname = 'Firstname must not be empty'
            if(!lastname || lastname.trim() === '') errors.lastname = 'Lastname must not be empty'
            if(!birth_date || birth_date.trim() === '') errors.birth_date = 'Birth date must not be empty'

            if(Object.keys(errors).length > 0) return res.status(400).json(errors)

            const result = await prisma.directors.update({
                where: {
                    id: Number(id)
                },
                data: {
                    firstname,
                    lastname,
                    birth_date
                }
            })

            return res.status(200).json(result)
        } else if(req.method === 'DELETE'){
            const result = await prisma.directors.delete({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json(result);
        }
    }catch(err){
        return res.status(500).json('Something went wrong...')
    }
}