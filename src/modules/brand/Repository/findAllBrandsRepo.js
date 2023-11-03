import { db } from '../../../config/db.js';

export const findAllBrandsRepo = async () => {
  try {
    const brand = await db.brand.findMany();
    return brand;
  } catch (error) {
    throw {
      message: 'Não foi possível conectar com o BD !',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
