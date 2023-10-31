import { db } from '../../../config/db.js';

export const deleteStoreRepo = async id => {
  try {
    return await db.store.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Não foi possivel deletar a loja');
  }
};
