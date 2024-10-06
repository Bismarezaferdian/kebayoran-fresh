import { prisma } from "@/utils/conect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const { userId } = params;
    if (!userId) {
      return new Response(JSON.stringify("not authorize"), { status: 401 });
    }
    const cart = await prisma.cart.findUnique({
      where: {
        userId: userId,
      },
      include: {
        cartItems: {
          include: {
            product: true,
            Option: true,
          },
        },
      },
    });
    return new Response(JSON.stringify(cart), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("something went wrong !"), {
      status: 500,
    });
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const { userId } = params;
    const data = await req.json();
    const cart = await prisma.cart.update({
      where: {
        userId: userId,
      },
      data: data,
    });
    return new NextResponse(JSON.stringify(cart), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("something went wrong !"), {
      status: 500,
    });
  }
};
