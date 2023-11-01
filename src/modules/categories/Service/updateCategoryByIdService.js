import { findCategoryByIdRepo } from '../Repository/findCategoryByIdRepo.js';
import { updateCategoryByIdRepo } from '../Repository/updateCategoryByIdRepo.js';

export const updateCategoryByIdService = async (description, name, id) => {
  const catogoryById = await findCategoryByIdRepo(id);

  switch (catogoryById === null) {
    case true:
      return {
        data: null,
      };
    case false:
      const result = await updateCategoryByIdRepo(description, name, id);
      return result;
  }
};
