import { createCategoryRepo } from '../Repository/createCategoryRepo.js';
import { findCategoryByNameRepo } from '../Repository/findCategoryByNameRepo.js';

export const createCategoryService = async (name, description) => {
  const verifyCategory = await findCategoryByNameRepo(name);
  if (verifyCategory !== null) {
    return {
      message: 'Categoria já registrada no sistema',
      name: verifyCategory.name,
    };
  } else {
    const resultFromRepository = await createCategoryRepo(name, description);
    return {
      message: 'Categoria nova no sistema',
      name: resultFromRepository,
    };
  }
};
