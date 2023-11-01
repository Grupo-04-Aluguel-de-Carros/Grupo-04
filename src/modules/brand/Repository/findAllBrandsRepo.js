import { db } from '../../../config/db.js';

export const findAllBrandsRepo = async () => {
  try {
    const brand = await db.brand.findMany();
    return brand;
  } catch (error) {
    throw new Error('É necessário o preenchimento do campo nome');
  }
};
