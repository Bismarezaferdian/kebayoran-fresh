import { prisma } from "@/utils/conect"
import { NextRequest } from "next/server"

export const PUT = async (req:NextRequest, {params}:{params:{id:string}})=>{
try {
    const {id}= params
    const data =await req.json()
    const updateCartItem= prisma.cartItem.update({
        where:{
            id:id
        },
        data:data
    })

 
} catch (error) {
    
}
};

export const DELETE= async (req:NextRequest, {params}:{params:{id:string}})=>{
    try {
        const {id}= params
        await prisma.cartItem.delete({
            where:{
                id:id,
            }
        })
    } catch (error) {
        
    }
}