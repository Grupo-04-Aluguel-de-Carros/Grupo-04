import { findCategoryByNameRepo } from '../Repository/findCategoryByNameRepo.js';

export const findCategoryByNameService = async name => {
  const resultFromRepo = await findCategoryByNameRepo(name);
  return resultFromRepo;
};
