import { updateCategoryByIdRepo } from '../Repository/updateCategoryByIdRepo.js';

export const updateCategoryByIdService = async (description, name, id) => {
  const result = await updateCategoryByIdRepo(description, name, id);
  return result;
};
