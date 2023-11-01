import { findCategoryByNameRepo } from '../Repository/findCategoryByNameRepo.js';

export const findCategoryByNameService = async name => {
  const resultFromRepo = await findCategoryByNameRepo(name);
  switch (resultFromRepo !== null) {
    case true:
      return {
        data: resultFromRepo,
      };
    case false:
      return {
        data: null,
      };
  }
};
