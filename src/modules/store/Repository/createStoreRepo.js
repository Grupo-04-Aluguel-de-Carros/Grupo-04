import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createStoreRepo = async ({ name }) => {
  try {
    const result = await db.store.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return result;
  } catch (error) {
    throw {
      message: 'Não foi possivel criar a loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
