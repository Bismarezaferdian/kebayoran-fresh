import { NextRequest, NextResponse } from "next/server"
import { getSession } from "./action";


export async function middleware(request:Request){
    const session = await getSession();
    // const isAuthenticated= false

    if(!session.isLoggedIn){
        return NextResponse.redirect(new URL("/masuk",request.url))
    }

    return NextResponse.next()

  }

  export const config={
    matcher: ["/about"]
}
