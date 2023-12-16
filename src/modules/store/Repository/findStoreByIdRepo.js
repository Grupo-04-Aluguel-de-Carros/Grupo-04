import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findStoreByIdRepo = async (id, dbClient = db) => {
  try {
    return await dbClient.store.findUnique({
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
  } catch (error) {
    throw {
      message: 'Não foi possível buscar a loja pelo id',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
