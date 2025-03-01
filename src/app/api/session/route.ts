import { getSession } from "@/action"
import { NextResponse } from "next/server"

export const GET =async ()=>{
    const session =await getSession()
    return new NextResponse(JSON.stringify(session),{status:200})
    // return NextResponse.json(session,{status:200})
}