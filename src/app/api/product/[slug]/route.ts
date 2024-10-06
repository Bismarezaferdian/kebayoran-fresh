import { prisma } from "@/utils/conect";
import { NextRequest, NextResponse } from "next/server";

// export const GET = async (req: NextRequest, { params }: { params: { slug: string } }) => {
//   try {
//     const { slug } = params;  // destructure slug from params

//     // Fetch the product using the slug
//     const product = await prisma.product.findUnique({
//       where: {
//         slug: slug,
//       },
//     });

//     // If the product is not found, return a 404 response
//     if (!product) {
//       return NextResponse.json({ message: "Product not found!" }, { status: 404 });
//     }

//     // Return the product if found
//     return NextResponse.json(product, { status: 200 });

//   } catch (error) {
//     console.log("Error fetching product:", error);

//     // Handle any server errors with a 500 response
//     return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
//   }
// };

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const { slug } = params;
    const product = await prisma.product.findUnique({
      where: {
        slug: slug,
      },
      include: {
        option: true,
      },
    });

    if (!product) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found !" }),
        { status: 404 }
      );
    }
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "internal server error !" }),
      {
        status: 500,
      }
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const { slug } = params;
    const data = await req.json();
    await prisma.product.update({
      where: {
        slug: slug,
      },
      data: data,
    });

    return new NextResponse(JSON.stringify("success update data "), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify("internal server error !"), {
      status: 500,
    });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const { slug } = params;

    // check product is exist ?
    const product = await prisma.product.findUnique({
      where: { slug },
    });
    //if not exist return messege not found
    if (!product) {
      return new NextResponse(JSON.stringify(`${slug} not found !`), {
        status: 404,
      });
    }
    //if exist delete product
    await prisma.product.delete({
      where: {
        slug: slug,
      },
    });

    return new NextResponse(JSON.stringify(`${slug} success deleted `));
  } catch (error) {
    return new NextResponse(JSON.stringify("internel server error !"), {
      status: 500,
    });
  }
};
