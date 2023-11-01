import { excludeCategoryRepo } from '../Repository/excludeCategoryRepo.js';
import { findCategoryByIdRepo } from '../Repository/findCategoryByIdRepo.js';

export const excludeCategoryService = async id => {
  const verifyCategoryById = await findCategoryByIdRepo(id);
  console.log(verifyCategoryById);
  if (verifyCategoryById === null) {
    return {
      message: 'Categoria não existente no sistema',
      name: verifyCategoryById,
    };
  } else {
    const resultFromRepository = await excludeCategoryRepo(id);
    return {
      message: 'Excluindo categoria...',
      name: resultFromRepository,
    };
  }
};
