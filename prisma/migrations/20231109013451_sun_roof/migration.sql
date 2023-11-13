/*
  Warnings:

  - You are about to drop the column `sunroof` on the `Feature` table. All the data in the column will be lost.
  - Added the required column `sunRoof` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "sunroof",
ADD COLUMN     "sunRoof" BOOLEAN NOT NULL;
