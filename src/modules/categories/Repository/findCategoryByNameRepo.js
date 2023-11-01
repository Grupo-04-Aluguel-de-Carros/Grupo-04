import { db } from '../../../config/db.js';

export const findCategoryByNameRepo = async name => {
  try {
    const category = await db.category.findFirst({
      where: {
        name: name,
      },
      select: {
        name: true,
      },
    });
    return category;
  } catch (error) {
    throw new Error('É necessário o preenchimento do campo nome');
  }
};
