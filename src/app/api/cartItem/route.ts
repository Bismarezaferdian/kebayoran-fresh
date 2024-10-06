import { prisma } from "@/utils/conect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const cartItem = await prisma.cartItem.findMany();
    return new NextResponse(JSON.stringify(cartItem), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify("internal server  error"), {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    console.log(data);

    // Cek apakah item dengan prodId dan optionId yang sama sudah ada di keranjang
    const existingproduct = await prisma.cartItem.findFirst({
      where: {
        optionId: data.optionId || null,
        prodId: data.prodId,
        cartId: data.cartId,
      },
    });
    if (existingproduct) {
      const cartItem = await prisma.cartItem.update({
        where: {
          id: existingproduct.id,
        },
        data: { quantity: existingproduct.quantity + data.quantity },
      });
      return new NextResponse(JSON.stringify(cartItem), { status: 200 });
    }
    //jika tidak ada di cartitem tambah baru
    const cartItem = await prisma.cartItem.create({
      data: data,
    });
    return new NextResponse(JSON.stringify(cartItem), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify("internal server error !"), {
      status: 500,
    });
  }
};
