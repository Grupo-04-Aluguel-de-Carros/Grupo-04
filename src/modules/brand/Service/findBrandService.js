import { findAllBrandsRepo } from '../Repository/findAllBrandsRepo.js';

export const findBrandService = async () => {
  const result = await findAllBrandsRepo();
  return result;
};
