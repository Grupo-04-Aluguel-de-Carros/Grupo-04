import { db } from '../../../config/db.js';

export const findBrandByNameRepo = async name => {
  try {
    const brand = await db.brand.findFirst({
      where: {
        name: name,
      },
      select: {
        name: true,
      },
    });
    return brand;
  } catch (error) {
    throw new Error('É necessário o preenchimento do campo nome');
  }
};
