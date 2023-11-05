/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `storeId` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_categoryId_fkey";

-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "storeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "categoryId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "value" INTEGER NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL;

-- DropTable
DROP TABLE "Category";

-- CreateTable
CREATE TABLE "_BrandToStore" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BrandToStore_AB_unique" ON "_BrandToStore"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandToStore_B_index" ON "_BrandToStore"("B");

-- AddForeignKey
ALTER TABLE "_BrandToStore" ADD CONSTRAINT "_BrandToStore_A_fkey" FOREIGN KEY ("A") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandToStore" ADD CONSTRAINT "_BrandToStore_B_fkey" FOREIGN KEY ("B") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;
