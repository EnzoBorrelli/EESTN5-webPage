import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId, eventId } = await req.json();

    // Verificamos si existe el usuario y el evento
    const existingUser = await db.user.findUnique({ where: { id: userId } });
    const existingEvent = await db.event.findUnique({ where: { id: eventId } });

    if (!existingUser || !existingEvent) {
      return NextResponse.json(
        { error: "usuario o evento no encontrados" },
        { status: 404 }
      );
    }

    // Creamos un recordatorio
    const newReminder = await db.reminder.create({
      data: {
        userId,
        eventId,
      },
    });
    return NextResponse.json(newReminder, { status: 201 });
  } catch (error) {
    console.error("Error al crear el recordatorio:", error); // Log para debug
    return NextResponse.json(
      { error: "error al crear el recordatorio" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { userId, eventId } = await request.json();
    
    const deletedReminder = await db.reminder.delete({
      where: {
        userId_eventId: {
          userId,
          eventId,
        },
      },
    });
    
    return NextResponse.json(deletedReminder, { status: 200 });
  } catch (error) {
    console.error("Error al eliminar el recordatorio:", error); // Log para debug
    return NextResponse.json({ error: 'Failed to delete reminder' }, { status: 500 });
  }
}
