import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createStoreRepo = async ({ name, brands }) => {
  try {
    const result = await db.store.create({
      data: {
        name,
        brands: {
          create: brands.map(brandData => ({
            brand: {
              connect: {
                id: brandData,
              },
            },
          })),
        },
      },
      select: {
        id: true,
        name: true,
        brands: { select: { brand: { select: { name: true } } } },
      },
    });
    console.log('result', result);
    return result;
  } catch (error) {
    throw {
      message: 'Não foi possivel criar a loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
