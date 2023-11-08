import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createStoreRepo = async ({ name, brands }) => {
  try {
    let brandBody = {};
    if (brands) {
      brandBody = {
        brands: {
          create: brands.map(brandData => ({
            brand: {
              connect: {
                id: brandData,
              },
            },
          })),
        },
      };
      return brandBody;
    }
    const result = await db.store.create({
      data: {
        name,
        brands: brandBody,
      },
      select: {
        id: true,
        name: true,
        brands: { select: { brand: { select: { name: true } } } },
      },
    });
    return result;
  } catch (error) {
    console.log('error', error);
    throw {
      message: 'Não foi possivel criar a loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
