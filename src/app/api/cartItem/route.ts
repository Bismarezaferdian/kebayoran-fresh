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
    //validation all require not empty
    if (!data.userId || !data.prodId || !data.quantity) {
      return new NextResponse(JSON.stringify({ message: "Missing required fields" }), {
        status: 400,
      });
    }
    
    // Check if the user already has a cart
    const userWithCart = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
      include:{
        Cart:true,
      }
    })
    let cartId = userWithCart?.Cart?.id;
   // If no cart exists, create a new cart
    if(!cartId){
     const newCart= await prisma.cart.create({
      //data have UserId
      data:{
        userId:data.userId
      }
    })
    cartId=newCart.id
    if (!cartId) {
      throw new Error("Failed to create cart");
    }

    // Verify the cart exists before proceeding
    const existingCart = await prisma.cart.findUnique({
      where: { id: cartId },
    });
    if (!existingCart) {
      return new NextResponse(JSON.stringify({ message: "Cart not found!" }), {
        status: 400,
      });
    }

    // Check if the product with the same optionId already exists in the cart
    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId,
        prodId: data.prodId,
        optionId: data.optionId ||null,
      },
    });
    //if product already exist in cartItem update qty
    if (existingCartItem) {
      const updatedCartItem = await prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: {
          quantity: existingCartItem.quantity + data.quantity,
        },
      });

      const cartItemsForUpdateUi= await prisma.cartItem.findMany({
        where:{
          cartId:cartId
        },
          include:{
            product:true,
            Option:true
          }
      })
      
      return new NextResponse(JSON.stringify(cartItemsForUpdateUi), { status: 200 });
    }

    //create new cartItem if product not found in cartItem  
    const quantity = parseInt(data.quantity)
    const cartItem = await prisma.cartItem.create({
      data:{
          quantity:quantity,
          optionId: data.optionId||null,
          prodId:data.prodId,
          cartId:newCart.id
            }
    });

    const cartItemsForUpdateUi= await prisma.cartItem.findMany({
      where:{
        cartId:newCart.id
      },
        include:{
          product:true,
          Option:true
        }
    })
    return new NextResponse(JSON.stringify(cartItemsForUpdateUi), { status: 200 });
    
  }
  

    //if user have cart add item
    // Cek apakah item dengan prodId dan optionId yang sama sudah ada di keranjang
    const existingproduct = await prisma.cartItem.findFirst({
      where: {
        cartId: userWithCart?.Cart?.id,
        optionId: data.optionId||null ,
        prodId: data.prodId,
      },
    });

    if (existingproduct) {
      const cartItem = await prisma.cartItem.update({
        where: {
          id: existingproduct.id,
        },
        data: { quantity: existingproduct.quantity + data.quantity },
      });

      const cartItemsForUpdateUi= await prisma.cartItem.findMany({
        where:{
          cartId:cartId
        },
          include:{
            product:true,
            Option:true
          }
      })
      
      return new NextResponse(JSON.stringify(cartItemsForUpdateUi), { status: 200 });
    }
    //jika tidak ada di cartitem tambah baru
    const cartItem = await prisma.cartItem.create({
      data: {
        quantity:data.quantity,
        optionId: data.optionId||null,
        prodId:data.prodId,
        cartId:userWithCart?.Cart?.id,
      },
    });

    const cartItemsForUpdateUi= await prisma.cartItem.findMany({
      where:{
        cartId:cartId
      },
        include:{
          product:true,
          Option:true
        }
    })
    return new NextResponse(JSON.stringify(cartItemsForUpdateUi), { status: 201 });
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify("internal server error ???!"), {
      status: 500,
    });
  }
};
