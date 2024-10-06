import {  PrismaClient } from "@prisma/client"
import { NextRequest } from "next/server"

const prisma = new PrismaClient()


export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
  ) 
  {
  try {
    const {id}= params
console.log(id)
    const category= await prisma.category.findUnique({
        where: {
          id: id,
        },
      })
return Response.json (category, {status:200})
  } catch (error) {
return Response.json ({message:"internal server error !"}, {status:500})
  }
}

export const PUT = async(req:NextRequest,{params}: {params: { id: string }}) =>{
    try {
        // const {name}= searchParams
        // console.log(name)
        const {id} = params
        const data= await req.json();
        await prisma.category.update({
            where:{
                id:id
            },
            data:data
        })
        return  Response.json ({message:"update success"}, {status:200})
    } catch (error) {
        console.log(error)
    return Response.json ({message:"internal server error !"}, {status:500})

    }
   
}


export const DELETE = async ( req:NextRequest,{params}: {params:{id:string}}) =>{
    try {
      //better with slug for SEO
        const {id} = params

        const category= await prisma.category.findUnique({
          where:{
            id:id
          }
        })

        await prisma.category.delete({
            where: {
             id: id,
            },
          })
          return Response.json({message: "success delete !"}, {status:200})
    } catch (error) {
      console.log(error)
        return Response.json("internal server error delete !", {status:500})
    }
}