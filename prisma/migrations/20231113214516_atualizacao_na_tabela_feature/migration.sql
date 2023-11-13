/*
  Warnings:

  - You are about to drop the column `displacement` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the column `power` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the column `velocity` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the column `zeroToHundred` on the `Feature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "displacement",
DROP COLUMN "power",
DROP COLUMN "velocity",
DROP COLUMN "zeroToHundred";
