/*
  Warnings:

  - You are about to drop the column `value` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "value",
DROP COLUMN "year";