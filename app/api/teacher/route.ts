import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import * as z from "zod";

// se define el esquema para validar los inputs al crear un profesor
const teacherSchema = z.object({
  name: z.string().min(1, "Este campo es necesario").max(25),
  specialization: z.enum(
    ["basico", "electronica", "electromecanica", "automotor"],
    {
      errorMap: () => ({
        message:
          "la especialidad debe ser una de estas opciones: basico, electronica, electromecanica, automotor ",
      }),
    }
  ),
  asignature: z.string().min(1, "Este campo es necesario").max(100),
  description: z.string().min(1, "Este campo es necesario").max(350),
  contact: z.string().email('correo no valido').optional().or(z.literal('')),
});

// se define el esquema para validar los inputs al editar un profesor
const updatedTeacherSchema = z.object({
  id: z.string().min(1, "ID es necesaria"),
  name: z.string().min(1, "Este campo es necesario").max(25),
  specialization: z.enum(
    ["basico", "electronica", "electromecanica", "automotor"],
    {
      errorMap: () => ({
        message:
          "la especialidad debe ser una de estas opciones: basico, electronica, electromecanica, automotor ",
      }),
    }
  ),
  asignature: z.string().min(1, "Este campo es necesario").max(100),
  description: z.string().min(1, "Este campo es necesario").max(350),
  contact: z.string().email('correo no valido').optional().or(z.literal('')),
});

const erasedTeacherSchema = z.object({
  id: z.string().min(1, "ID es necesaria"),
})

//POST request, utilizada al agregar infromacion en la base de datos
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, specialization, asignature, description, contact } =
      teacherSchema.parse(body); // se obtiene esta informacion del body

    // se verifica si el profesor ya existe
    const existingTeacherByName = await db.teacher.findUnique({
      where: { name },
    });

    if (existingTeacherByName) {
      return NextResponse.json(
        { teacher: null, message: "ya existe un profesor con ese nombre" },
        { status: 409 }
      );
    }

    // se crea un nuevo profesor
    const newTeacher = await db.teacher.create({
      data: {
        name,
        specialization,
        asignature,
        description,
        contact,
      },
    });

    return NextResponse.json({ success: true, teacher: newTeacher });
  } catch (error) {
    console.error("Error creating teacher:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to create teacher",
    });
  }
}

//PUT request, se utiliza para actualizar informacion
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name, specialization, asignature, description, contact } =
      updatedTeacherSchema.parse(body);

    // se verifica si ya existe el profesor
    const existingTeacher = await db.teacher.findUnique({
      where: { id },
    });

    if (!existingTeacher) {
      return NextResponse.json(
        { user: null, message: "profesor no encontrado" },
        { status: 404 }
      );
    }

    //actualiza la informacion del profesor
    const updatedTeacher = await db.teacher.update({
      where: { id: id },
      data: { name, specialization, asignature, description, contact },
    });

    return NextResponse.json(
      { user: updatedTeacher, message: "informacion de profesor actualizada" },
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
      { message: "algo salio mal" },
      { status: 500 }
    );
  }
}

//DELETE request, utilizada para borrar al profesor
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id} =
      erasedTeacherSchema.parse(body);

    // se verifica ue exista ese profesor
    const existingTeacher = await db.teacher.findUnique({
      where: { id },
    });

    if (!existingTeacher) {
      return NextResponse.json(
        { user: null, message: "profesor no encontrado" },
        { status: 404 }
      );
    }

    //borrar profesor
    const deletedTeacher = await db.teacher.delete({
      where: { id: id },
    });

    return NextResponse.json(
      { user: deletedTeacher, message: "profesor borrado existosamente" },
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
      { message: "algo salio mal" },
      { status: 500 }
    );
  }
}