import { db } from '../../../config/db.js';
import { HttpStatusCode } from 'axios';

export const findAllBrandsRepo = async () => {
  try {
    const [brand, total] = await db.$transaction([
      db.brand.findMany({
        take,
        skip,
        include: {
          stores: {
            select: {
              store: { select: { name: true } },
            },
          },
        },
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
