import { createBrandRepo } from '../Repository/createBrandRepo.js';

export const createBrandService = async ({ name }) => {
  const result = await createBrandRepo(name);
  return result.name;
};
