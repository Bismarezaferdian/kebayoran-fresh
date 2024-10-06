import { prisma } from "@/utils/conect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const option = await prisma.option.findUnique({
      where: {
        id: id,
      },
    });
    return new NextResponse(JSON.stringify(option), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify("internal server error !"), {
      status: 500,
    });
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const data = await req.json();
    const optionAfterUpdate = await prisma.option.update({
      where: {
        id: id,
      },
      data: data,
    });

    return new NextResponse(JSON.stringify(optionAfterUpdate), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify("internal server error !"), {
      status: 500,
    });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    await prisma.option.delete({
      where: {
        id: id,
      },
    });

    return new NextResponse(JSON.stringify(` success deleted `), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify("internel server error !"), {
      status: 500,
    });
  }
};
