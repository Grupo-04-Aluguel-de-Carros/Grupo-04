import { excludeCategoryRepo } from '../Repository/excludeCategoryRepo.js';

export const excludeCategoryService = async id => {
  const resultFromRepo = excludeCategoryRepo(id);
  return resultFromRepo;
};
