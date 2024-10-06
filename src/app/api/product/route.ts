import { prisma } from "@/utils/conect";
import { NextRequest, NextResponse } from "next/server";
// Edge API Routes VERSION 🔥

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat")?.split(",");
    const isFeature = searchParams.get("isFeature");

    // Konversi isFeature dari string ke boolean
    const isFeatureBoolean =
      isFeature === "true" ? true : isFeature === "false" ? false : undefined;

    const product = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: { in: cat } } : {}),
        ...(typeof isFeatureBoolean === "boolean"
          ? { isFeatured: isFeatureBoolean }
          : {}),
      },
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify("internal server error !"), {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    // const mentah = await req.text();
    // const parsedBody = JSON.parse(mentah);
    // console.log(parsedBody);
    const body = await req.json();
    const product = await prisma.product.createMany({
      data: body,
    });

    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (error) {
    console.log(error);

    return new NextResponse(
      JSON.stringify({ message: "Internal server error!" }),
      { status: 500 }
    );
  }
};
