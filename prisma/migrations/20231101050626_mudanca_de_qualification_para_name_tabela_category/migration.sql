/*
  Warnings:

  - You are about to drop the column `qualification` on the `Category` table. All the data in the column will be lost.
  - Added the required column `name` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "qualification",
ADD COLUMN     "name" TEXT NOT NULL;
