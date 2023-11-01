import { db } from '../../../config/db.js';

export const findCategoryByQualificationRepo = async qualification => {
  try {
    const category = await db.category.findFirst({
      where: {
        qualification: qualification,
      },
      select: {
        qualification: true,
      },
    });
    return category;
  } catch (error) {
    throw new Error('É necessário o preenchimento do campo nome');
  }
};
