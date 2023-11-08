import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const removeBrandFromStoreRepo = async (id, brand) => {
  try {
    return await db.brandOnStores.delete({
      where: {
        storeId_brandId: { storeId: id, brandId: brand },
      },
    });
  } catch (error) {
    throw {
      message: 'Não foi possivel remover a marca da loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
