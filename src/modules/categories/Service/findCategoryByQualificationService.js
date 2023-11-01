import { findCategoryByQualificationRepo } from '../Repository/findCategoryByQualificationRepo.js';

export const findCategoryByQualificationService = async qualification => {
  const resultFromRepo = await findCategoryByQualificationRepo(qualification);
  return resultFromRepo;
};
