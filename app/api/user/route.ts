import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { hash } from "bcrypt";
import * as z from "zod";

//define el esquema para la validacion de input
const userSchema = z.object({
  name: z.string().min(1, "nombre es obligatorio").max(25),
  email: z.string().min(1, "email es obligatorio").email("email no valido"),
  password: z
    .string()
    .min(1, "contraseña requerida")
    .min(8, "la contraseña debe ser de almenos 8 caracteres"),
});

const updateUserRoleSchema = z.object({
  id: z.string().min(1, "ID es necesaria"),
  role: z.enum(["admin", "user"], {
    errorMap: () => ({
      message: "los roles definidos son: user | admin",
    }),
  }), 
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password } = userSchema.parse(body);

    //verificar si el email existe

    const ExistingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (ExistingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "ya existe un usuario con ese correo" },
        { status: 409 }
      );
    }

    //verificar si el nombre existe

    const ExistingUserByName = await db.user.findUnique({
      where: { name: name },
    });

    if (ExistingUserByName) {
      return NextResponse.json(
        { user: null, message: "ya existe un usuario nombre" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10); //encryptamos la contraseña

    //guardamos usuario

    const newUser = await db.user.create({
      data: {
        name,
        email,
        role: "user",
        password: hashedPassword,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "Usuario creado satisfactoriamente" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Algo salio mal, intente nuevamente" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, role } = updateUserRoleSchema.parse(body);

    const ExistingUser = await db.user.findUnique({
      where: { id: id },
    });

    if (!ExistingUser) {
      return NextResponse.json(
        { user: null, message: "usuario no encontrado" },
        { status: 404 }
      );
    }
    const updatedUser = await db.user.update({
      where: { id: id },
      data: { role },
    });
    return NextResponse.json(
      { user: updatedUser, message: "User role updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.errors.map((e) => e.message).join(", ") },
        { status: 400 }
      );
    } 
    return NextResponse.json(
      { message: "Something went wrong, please try again" },
      { status: 500 }
    );
  }
}
