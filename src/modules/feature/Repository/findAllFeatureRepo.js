import { db } from '../../../config/db.js';

export const findAllFeatureRepo = async () => {
  const featureFromDb = db.feature.findMany();

  return featureFromDb;
};
