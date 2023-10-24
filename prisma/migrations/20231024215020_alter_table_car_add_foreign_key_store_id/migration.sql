/*
  Warnings:

  - Added the required column `storeId` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "storeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
