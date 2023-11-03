-- CreateTable
CREATE TABLE "BrandOnStores" (
    "storeId" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BrandOnStores_pkey" PRIMARY KEY ("storeId","brandId")
);

-- AddForeignKey
ALTER TABLE "BrandOnStores" ADD CONSTRAINT "BrandOnStores_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandOnStores" ADD CONSTRAINT "BrandOnStores_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
