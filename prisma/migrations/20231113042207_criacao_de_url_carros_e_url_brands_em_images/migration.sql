/*
  Warnings:

  - You are about to drop the column `url` on the `Images` table. All the data in the column will be lost.
  - Added the required column `urlBrand` to the `Images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlCar` to the `Images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Images" DROP COLUMN "url",
ADD COLUMN     "urlBrand" TEXT NOT NULL,
ADD COLUMN     "urlCar" TEXT NOT NULL;
