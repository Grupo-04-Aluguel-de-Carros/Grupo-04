import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const updateStoreRepo = async (id, updateBody) => {
  try {
    const result = await db.store.update({
      data: { name: updateBody },
      where: { id },
      select: {
        id: true,
        name: true,
        Address: { select: { id: true } },
        brands: {
          select: {
            brand: {
              select: {
                id: true,
                name: true,
                Car: {
                  select: { name: true, model: true },
                  where: { storeId: id },
                },
              },
            },
          },
        },
      },
    });
    return result;
  } catch (error) {
    throw {
      message: 'Não foi possivel atualizar a loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
