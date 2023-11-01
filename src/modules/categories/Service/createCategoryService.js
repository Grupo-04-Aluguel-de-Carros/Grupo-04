import { createCategoryRepo } from '../Repository/createCategoryRepo.js';
import { findCategoryByQualificationRepo } from '../Repository/findCategoryByQualificationRepo.js';

export const createCategoryService = async (qualification, description) => {
  const verifyCategory = await findCategoryByQualificationRepo(qualification);
  if (verifyCategory !== null) {
    return {
      message: 'Categoria já registrada no sistema',
      name: verifyCategory.qualification,
    };
  } else {
    const resultFromRepository = await createCategoryRepo(
      qualification,
      description
    );
    return {
      message: 'Categoria nova no sistema',
      qualification: resultFromRepository,
    };
  }
};
