const { PrismaClient } = require("@prisma/client");
const dayjs = require("dayjs");

const db = new PrismaClient();

const handleNotification = async (token) => {
  try {
    const response = await fetch(
      "https://eestn-5-web-page.vercel.app/api/push-notification",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://eestn-5-web-page.vercel.app",
        },
        body: JSON.stringify({
          token: token,
          title: "Se aproxima un evento!",
          message:
            "Revisa el calendario, tienes un recordatorio guardado para un evento próximo",
          link: "/calendario",
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`Notification failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error sending notification: ${error}`);
  }
};

const sendReminders = async () => {
  const now = `${dayjs().year()}-${dayjs().month() + 1}-${dayjs().date()}`;
  const tomorrow = `${dayjs().year()}-${dayjs().month() + 1}-${
    dayjs().date() + 1
  }`;

  try {
    // Fetch reminders from the database
    const reminders = await db.reminder.findMany({
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

    // Group reminders by user
    const remindersByUser = reminders.reduce((acc, reminder) => {
      if (!acc[reminder.userId]) {
        acc[reminder.userId] = [];
      }
      acc[reminder.userId].push(reminder);
      return acc;
    }, {});

    // Send notifications to each user
    for (const userId in remindersByUser) {
      const tokenRecord = await db.token.findUnique({
        where: { userId: userId },
      });

      if (tokenRecord && tokenRecord.token) {
        await handleNotification(tokenRecord.token);
      } else {
        console.warn(`No FCM token found for user ${userId}`);
      }
    }
  } catch (error) {
    console.error(`Error fetching reminders: ${error}`);
  } finally {
    await db.$disconnect();
  }
};

sendReminders();
