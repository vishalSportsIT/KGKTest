// src/db.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default prisma;


export const createPost=async(req,res)=>{

    const {title,slug,content}=req.body
    try{
     prisma.Post.create({
        data:{
            title,
            slug,
            content
        }
     })

     res.status(201).json({message:'Post created successfully'})
    }catch(err){
        console.log(err);
    }
}