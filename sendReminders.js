import useFcmToken from "./hooks/useFcmToken";
import { db } from "./lib/db";
import dayjs from "dayjs";

const handleNotification = async (token) => {
  const response = await fetch("/api/push-notification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
      title: "Se aproxima un evento!",
      message:
        "Revisa el calendario, tienes un recordatorio guardado para un evento próximo",
      link: "/calendario",
    }),
  });
};

async function sendReminders() {
  const now = `${dayjs().year()}-${dayjs().month() + 1}-${dayjs().date()}`;
  const tomorrow = `${dayjs().year()}-${dayjs().month() + 1}-${
    dayjs().date() + 1
  }`;
  const reminders = await db.reminder.findMany({
    //traer todos los recordatorios de la db
    where: {
      event: {
        date: {
          gte: now,
          lte: tomorrow,
        },
      },
    },
    include: { event: true },
  });

  //agrupar los recordatorios por usuario
  const remindersByUser = reminders.reduce((acc, reminder) => {
    if (!acc[reminder.userId]) {
      acc[reminder.userId] = [];
    }
    acc[reminder.userId].push(reminder);
    return acc;
  }, {});

  //envaimos notificaciones a cada usuario
  for (const userId in remindersByUser) {
    const token = await db.token.findUnique({ where: { userId: userId } });
    await handleNotification(token);
  }
}
