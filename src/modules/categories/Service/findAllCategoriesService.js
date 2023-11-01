import { findAllCategoriesRepo } from '../Repository/findAllCategoriesRepo.js';

export const findAllCategoriesService = async () => {
  const resultFromRepo = await findAllCategoriesRepo();
  return resultFromRepo;
};
