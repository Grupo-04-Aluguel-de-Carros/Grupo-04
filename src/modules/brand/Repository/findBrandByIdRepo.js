import { db } from '../../../config/db.js';

export const findBrandByIdRepo = async id => {
  try {
    const brand = await db.brand.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return brand;
  } catch (error) {
    throw new Error('É necessário o preenchimento do campo id');
  }
};
