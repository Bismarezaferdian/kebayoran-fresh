import { prisma } from "@/utils/conect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const option = await prisma.option.findMany();
    if(!option.length){
    return new NextResponse(JSON.stringify("tidak ada data"), { status: 404 });
    }
    return new NextResponse(JSON.stringify(option), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify("internal server error"), {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const data = await req.json();
    const option = await prisma.option.create({
      data: data,
    });

    return new NextResponse(JSON.stringify(option), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify("internal server error !"), {
      status: 500,
    });
  }
};
