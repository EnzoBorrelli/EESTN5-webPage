import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import * as z from "zod";

// Define the schema for input validation
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
  career: z.string().min(1, "Este campo es necesario").max(25),
  description: z.string().min(1, "Este campo es necesario").max(350),
  contact: z.string().min(1, "Este campo es necesario"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, specialization, career, description, contact } =
      teacherSchema.parse(body);

    // Check if a teacher with the same name already exists
    const existingTeacherByName = await db.teacher.findUnique({
      where: { name },
    });

    if (existingTeacherByName) {
      return NextResponse.json(
        { teacher: null, message: "A teacher with this name already exists" },
        { status: 409 }
      );
    }

    // Create a new teacher
    const newTeacher = await db.teacher.create({
      data: {
        name,
        specialization,
        career,
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
