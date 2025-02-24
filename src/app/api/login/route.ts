// import { NextApiRequest, NextApiResponse } from "next"; //not work
// import { getIronSession } from "iron-session";
// import { sessionOptions } from "@/lib";
import { getSession } from "@/action";
import { NextRequest, NextResponse } from "next/server";




export const POST =async(req: NextRequest, res: NextResponse) =>{
    const body= await req.json()
    const session = await getSession()
    const { username, password } = body;
    // Example validation (replace with actual authentication logic)
    if (username === "admin" && password === "password") {
      session.userId="1";
      session.userName=username;
      session.isLoggedIn=true
      // Save user to session
      await session.save();  // Persist session
      return NextResponse.redirect(new URL("/product",req.url))
    } else {
    return new NextResponse(JSON.stringify({error: "Invalid credentials" }),{status:401})
    }
  // }

}
