import { db } from '../../../config/db.js';

export const createCategoryRepo = async (qualification, description) => {
  try {
    const category = await db.category.create({
      data: {
        qualification: qualification,
        description: description,
      },
      select: {
        qualification: true,
        description: true,
      },
    });
    return category;
  } catch (error) {
    throw new Error(
      'É necessário o preenchimento do campo qualification e description'
    );
  }
};
