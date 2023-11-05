-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
