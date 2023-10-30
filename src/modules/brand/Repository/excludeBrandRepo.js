import { db } from '../../../config/db.js';

export const excludeBrandRepo = async id => {
  try {
    const deleteBrand = await db.brand.delete({
      where: {
        id: id,
      },
    });
    return deleteBrand;
  } catch (error) {
    throw new Error('Passe o id na url');
  }
};
