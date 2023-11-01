import { db } from '../../../config/db.js';

export const updateCategoryByIdRepo = async (description, name, id) => {
  try {
    const updateCategory = await db.category.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
      },
    });
    return updateCategory;
  } catch (error) {
    throw new Error('É necessário o preenchimento do campo nome e id !');
  }
};
