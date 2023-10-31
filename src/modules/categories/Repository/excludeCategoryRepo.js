import { db } from '../../../config/db.js';

export const excludeCategoryRepo = async id => {
  try {
    const categoryDeleted = await db.category.delete({
      where: {
        id: id,
      },
    });
    return categoryDeleted;
  } catch (error) {
    return 'Id de categoria deve ser informado', error.message;
  }
};
