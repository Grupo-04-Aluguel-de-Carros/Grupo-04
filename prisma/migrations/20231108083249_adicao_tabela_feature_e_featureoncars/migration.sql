-- CreateTable
CREATE TABLE "FeaturesOnCars" (
    "featureId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeaturesOnCars_pkey" PRIMARY KEY ("carId","featureId")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "massageSystem" BOOLEAN NOT NULL,
    "shielding" BOOLEAN NOT NULL,
    "sunroof" BOOLEAN NOT NULL,
    "gearLever" BOOLEAN NOT NULL,
    "selfDriving" BOOLEAN NOT NULL,
    "zeroToHundred" TEXT NOT NULL,
    "displacement" TEXT NOT NULL,
    "power" TEXT NOT NULL,
    "velocity" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CarToFeature" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Feature_id_key" ON "Feature"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_CarToFeature_AB_unique" ON "_CarToFeature"("A", "B");

-- CreateIndex
CREATE INDEX "_CarToFeature_B_index" ON "_CarToFeature"("B");

-- AddForeignKey
ALTER TABLE "FeaturesOnCars" ADD CONSTRAINT "FeaturesOnCars_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturesOnCars" ADD CONSTRAINT "FeaturesOnCars_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarToFeature" ADD CONSTRAINT "_CarToFeature_A_fkey" FOREIGN KEY ("A") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarToFeature" ADD CONSTRAINT "_CarToFeature_B_fkey" FOREIGN KEY ("B") REFERENCES "Feature"("id") ON DELETE CASCADE ON UPDATE CASCADE;
