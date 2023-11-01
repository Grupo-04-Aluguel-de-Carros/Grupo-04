import { db } from '../../../config/db.js';

export const excludeBrandRepo = async id => {
  try {
    const deleteBrand = await db.brand.delete({
      where: {
        id: id,
      },
    });

    const deleteCars = await db.car.deleteMany({
      where: {
        brandId: id,
      },
    });
    const transaction = await db.$transaction([deleteBrand, deleteCars]);
    console.log(transaction);
    return deleteBrand;
  } catch (error) {
    throw new Error('Passe o id na url');
  }
};
