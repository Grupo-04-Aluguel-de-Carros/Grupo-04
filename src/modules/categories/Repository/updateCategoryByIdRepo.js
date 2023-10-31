import { db } from '../../../config/db.js';

export const updateCategoryByIdRepo = async (
  description,
  qualification,
  id
) => {
  try {
    const updateCategory = await db.category.update({
      where: {
        id: id,
      },
      data: {
        qualification: qualification,
        description: description,
      },
    });
    return updateCategory;
  } catch (error) {
    throw new Error('É necessário o preenchimento do campo nome e id !');
  }
};
