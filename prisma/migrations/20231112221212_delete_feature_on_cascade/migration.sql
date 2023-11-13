-- DropForeignKey
ALTER TABLE "FeaturesOnCars" DROP CONSTRAINT "FeaturesOnCars_featureId_fkey";

-- AddForeignKey
ALTER TABLE "FeaturesOnCars" ADD CONSTRAINT "FeaturesOnCars_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE CASCADE ON UPDATE CASCADE;
