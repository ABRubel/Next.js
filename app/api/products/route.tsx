import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Rice", price: 50 },
    { id: 2, name: "Dal", price: 40 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: `${body.name} inserted succefully` },
    { status: 201 }
  );
}
