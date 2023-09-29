import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (params.id > 10) {
    return NextResponse.json({ status: 404 });
  }

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: `${body.name} updated successfully` });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json(
      {
        error: "Product not found",
      },
      { status: 404 }
    );
  }
  return NextResponse.json(
    {
      message: "Product deleted successfully",
    },
    { status: 200 }
  );
}
