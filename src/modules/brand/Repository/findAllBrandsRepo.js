import { db } from '../../../config/db.js';
import { HttpStatusCode } from 'axios';

export const findAllBrandsRepo = async (listPerPage, offset, name) => {
  try {
    const [brand, total] = await db.$transaction([
      db.brand.findMany({
        where: {
          name,
        },
        take: listPerPage,
        skip: offset,
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
    console.log('Error==>', error);
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
