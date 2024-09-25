import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // Verificamos si existe el token
    const tokens = await db.token.findMany()
      return NextResponse.json({ success: true, tokens }); // Return the token
    } catch (error) {
      console.error("Error fetching tokens:", error);
      return NextResponse.json({
        success: false,
        message: "Failed to fetch tokens",
      });
    }
}


export async function POST(req: NextRequest) {
  try {
    const { userId, token } = await req.json();

    // Verificamos si existe el usuario y el token
    const existingToken = await db.token.findUnique({
      where: { userId: userId, token: token },
    });

    if (existingToken) {
      return NextResponse.json(
        { error: "token para este usuario ya existente" },
        { status: 409 }
      );
    }

    // Creamos un token
    const newToken = await db.token.create({
      data: {
        userId,
        token,
      },
    });
    return NextResponse.json(newToken, { status: 201 });
  } catch (error) {
    console.error("Error al crear el token:", error); // Log para debug
    return NextResponse.json(
      { error: "error al crear el token" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { userId, token } = await req.json();

    // Verificamos si existe el usuario y el token
    const existingToken = await db.token.findUnique({
      where: { userId: userId, token: token },
    });

    if (!existingToken) {
      return NextResponse.json(
        { error: "usuario o token no encontrados" },
        { status: 404 }
      );
    }

    // actualizamos un token
    const updatedToken = await db.token.update({
      where: { userId: userId },
      data: {
        token,
      },
    });
    return NextResponse.json(updatedToken, { status: 201 });
  } catch (error) {
    console.error("Error al actualizar el token:", error); // Log para debug
    return NextResponse.json(
      { error: "error al actualizar el token" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { userId} = await req.json();

    // Verificamos si existe el usuario y el token
    const existingToken = await db.token.findUnique({
      where: { userId: userId },
    });

    if (!existingToken) {
      return NextResponse.json(
        { error: "usuario o token no encontrados" },
        { status: 404 }
      );
    }

    // actualizamos un token
    const deletedToken = await db.token.delete({
      where: { userId: userId },
    });
    return NextResponse.json(deletedToken, { status: 201 });
  } catch (error) {
    console.error("Error al borrar el token:", error); // Log para debug
    return NextResponse.json(
      { error: "error al borrar el token" },
      { status: 500 }
    );
  }
}
