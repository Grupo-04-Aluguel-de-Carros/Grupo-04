import { updateCategoryByIdRepo } from '../Repository/updateCategoryByIdRepo.js';

export const updateCategoryByIdService = async (
  description,
  qualification,
  id
) => {
  const result = await updateCategoryByIdRepo(description, qualification, id);
  return result;
};
