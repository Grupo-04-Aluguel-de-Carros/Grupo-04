import { db } from '../../../config/db.js';

export const findCategoryByIdRepo = async id => {
  try {
    const category = await db.category.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });
    return category;
  } catch (error) {
    throw new Error('É necessário o preenchimento do campo id');
  }
};
