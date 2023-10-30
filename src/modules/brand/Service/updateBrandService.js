import { updateBrandRepo } from '../Repository/updateBrandRepo.js';

export const updateBrandService = async (name, id) => {
  const result = await updateBrandRepo(name, id);
  return result;
};
