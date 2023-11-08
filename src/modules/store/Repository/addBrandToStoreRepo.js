import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const addBrandToStoreRepo = async (id, brands) => {
  try {
    const result = await db.brandOnStores.create({
      data: {
        storeId: id,
        brandId: brands,
      },
    });

    return result;
  } catch (error) {
    throw {
      message: 'Não foi possivel relacionar a marca à loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
