/*
  Warnings:

  - The `urlCar` column on the `Images` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Images" DROP COLUMN "urlCar",
ADD COLUMN     "urlCar" TEXT[];
