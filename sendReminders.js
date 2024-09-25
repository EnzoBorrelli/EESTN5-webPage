import useFcmToken from "./hooks/useFcmToken";
import { db } from "./lib/db";
import dayjs from "dayjs";

const handleNotification = async (token) => {
  try {
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
    if (!response.ok) {
      throw new Error(`Notification failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error sending notification: ${error.message}`);
  }
};


export async function sendReminders() {
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
    const tokenRecord = await db.token.findUnique({ where: { userId: userId } });
    if (tokenRecord && tokenRecord.token) {
      await handleNotification(tokenRecord.token);
    } else {
      console.warn(`No FCM token found for user ${userId}`);
    }
  }
  
}
