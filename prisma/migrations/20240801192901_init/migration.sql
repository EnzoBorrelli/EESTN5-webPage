/*
  Warnings:

  - You are about to drop the column `career` on the `Teacher` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "career",
ADD COLUMN     "asignature" TEXT;
