import { db } from '../../../config/db.js';

export const findAllCategoriesRepo = async () => {
  try {
    const category = await db.category.findMany();
    return category;
  } catch (error) {
    throw new Error('Revise a rota antes de qualquer requisição');
  }
};
