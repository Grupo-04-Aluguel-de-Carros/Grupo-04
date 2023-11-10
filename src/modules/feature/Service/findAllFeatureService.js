import { findAllFeatureRepo } from '../Repository/findAllFeatureRepo.js';

export const findAllFeatureService = async () => {
  const featureFromRepo = await findAllFeatureRepo();
  return featureFromRepo;
};
