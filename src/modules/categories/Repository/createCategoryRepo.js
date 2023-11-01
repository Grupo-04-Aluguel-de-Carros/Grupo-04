import { db } from '../../../config/db.js';

export const createCategoryRepo = async (name, description) => {
  try {
    const category = await db.category.create({
      data: {
        name: name,
        description: description,
      },
      select: {
        name: true,
        description: true,
      },
    });
    return category;
  } catch (error) {
    throw new Error('É necessário o preenchimento do campo name e description');
  }
};
