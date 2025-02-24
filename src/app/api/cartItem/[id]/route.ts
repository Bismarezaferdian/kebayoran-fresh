import { prisma } from "@/utils/conect"
import { NextRequest } from "next/server"

export const GET = async (req:NextRequest, {params}:{params:{id:string}})=>{
try {
    const {id}= params
    const cartItem=await prisma.cartItem.findMany({
        where:{
            cartId:id
        }
    })
    return new Response(JSON.stringify(cartItem), { status: 200 });
 
} catch (error) {
    return new Response(JSON.stringify({message:"server error"}), { status: 500 });
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