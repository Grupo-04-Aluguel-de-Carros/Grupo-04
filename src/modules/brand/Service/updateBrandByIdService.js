import { updateBrandByIdRepo } from '../Repository/updateBrandByIdRepo.js';

export const updateBrandByIdService = async (name, id) => {
  const result = await updateBrandByIdRepo(name, id);
  return result;
};
