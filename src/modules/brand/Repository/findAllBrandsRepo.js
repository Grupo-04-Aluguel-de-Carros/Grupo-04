import { db } from '../../../config/db.js';
import { HttpStatusCode } from 'axios';

export const findAllBrandsRepo = async (take, skip) => {
  try {
    const [brand, total] = await db.$transaction([
      db.brand.findMany({
        take,
        skip,
      }),
      db.brand.count(),
    ]);
    return { total, brand };
  } catch (error) {
    throw {
      message: 'Não foi possível conectar com o BD !',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
