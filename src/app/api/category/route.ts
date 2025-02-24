import { prisma } from "@/utils/conect";
import { PrismaClient } from "@prisma/client";


export async function GET() {
  try {
    // const categories = await prisma.category.findMany();
    const categories = await prisma.category.findMany(
      {
        include: {
          product: true,
        }
      }
    );
    return Response.json(categories, { status: 200 });
    //   return new NextResponse(JSON.stringify(categories), { status: 200 })
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
    //   return new NextResponse(JSON.stringify('Internal Server Error'), { status: 200 })
  }
}

export async function POST(req: Response) {
  try {
    // const body:CategoryApi = await req.json();
    const body = await req.json();
    if(body.length > 0){

      await prisma.category.createMany({
        data: body,
      });
      return Response.json({message:"succes add data"}, { status: 200 });
    }
    await prisma.category.create({
      data: body,
    });
    return Response.json("succes add data", { status: 200 });
  } catch (error) {
    return Response.json("Internal Server Error", { status: 500 });
  }
}

export async function Update(req: Response) {}
