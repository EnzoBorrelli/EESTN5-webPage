/*
  Warnings:

  - You are about to drop the `CalendarEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CalendarEvent";

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "finishTime" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
