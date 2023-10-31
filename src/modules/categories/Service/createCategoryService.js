import { createCategoryRepo } from '../Repository/createCategoryRepo.js';

export const createCategoryService = async (qualification, description) => {
  const resultFromRepository = await createCategoryRepo(
    qualification,
    description
  );
  return resultFromRepository;
};
