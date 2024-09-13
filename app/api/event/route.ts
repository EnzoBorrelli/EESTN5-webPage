import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import * as z from "zod";
import dayjs from "dayjs";

//se define un esquema para verificar la fecha del evento
const dateSchema = z
  .string()
  .min(1, "la fecha es necesaria")
  .refine((value) => dayjs(value, "YYYY-MM-DD", true).isValid(), {
    message: "formato incorrecto, la fecha se espera en YYYY-MM-DD",
  });

//se define un esquema para verificar el horario del evento
const timeSchema = z
  .string()
  .min(1, "el horario es necesario")
  .refine((value) => dayjs(value, "HH:mm", true).isValid(), {
    message: "formato incorrecto, el horario se espera en HH:mm",
  });

// se define el esquema para validar los inputs al crear un evento
const eventSchema = z.object({
  title: z.string().min(1, "Este campo es necesario").max(25),
  date: dateSchema,
  startTime: timeSchema,
  finishTime: timeSchema,
});

// se define el esquema para validar los inputs al editar un evento
const updatedEventSchema = z.object({
  id: z.string().min(1, "ID es necesaria"),
  title: z.string().min(1, "Este campo es necesario").max(25),
  date: dateSchema,
  startTime: timeSchema,
  finishTime: timeSchema,
});

const erasedEventSchema = z.object({
  id: z.string().min(1, "ID es necesaria"),
});

//POST request, utilizada al agregar infromacion en la base de datos
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, date, startTime, finishTime } = eventSchema.parse(body); // se obtiene esta informacion del body

    // se crea un nuevo evento
    const newEvent = await db.event.create({
      data: {
        title,
        date,
        startTime,
        finishTime,
      },
    });

    const response = NextResponse.json({ success: true, event: newEvent });
    response.headers.set("Cache-Control", "no-store"); // Add this line
    return response;
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to create event",
    });
  }
}

//PUT request, se utiliza para actualizar informacion
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, date, startTime, finishTime } =
      updatedEventSchema.parse(body);

    // se verifica si ya existe el evento
    const existingEvent = await db.event.findUnique({
      where: { id },
    });

    if (!existingEvent) {
      return NextResponse.json(
        { user: null, message: "evento no encontrado" },
        { status: 404 }
      );
    }

    //actualiza la informacion del evento
    const updatedEvent = await db.event.update({
      where: { id: id },
      data: {
        title,
        date,
        startTime,
        finishTime,
      },
    });

    const response = NextResponse.json(
      { user: updatedEvent, message: "informacion de evento actualizada" },
      { status: 200 }
    );
    response.headers.set("Cache-Control", "no-store"); // Add this line
    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.errors.map((e) => e.message).join(", ") },
        { status: 400 }
      );
    }
    return NextResponse.json({ message: "algo salio mal" }, { status: 500 });
  }
}

//DELETE request, utilizada para borrar al evento
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = erasedEventSchema.parse(body);

    // se verifica ue exista ese evento
    const existingEvent = await db.event.findUnique({
      where: { id },
    });

    if (!existingEvent) {
      return NextResponse.json(
        { user: null, message: "evento no encontrado" },
        { status: 404 }
      );
    }

    //borrar evento
    const deletedEvent = await db.event.delete({
      where: { id: id },
    });

    const response = NextResponse.json(
      { user: deletedEvent, message: "evento borrado existosamente" },
      { status: 200 }
    );
    response.headers.set("Cache-Control", "no-store"); // Add this line
    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.errors.map((e) => e.message).join(", ") },
        { status: 400 }
      );
    }
    return NextResponse.json({ message: "algo salio mal" }, { status: 500 });
  }
}
