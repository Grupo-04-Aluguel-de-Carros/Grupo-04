import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findStoreByIdRepo = id => {
  try {
    return db.store.findUnique({
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
      message: 'Não foi possivel buscar a loja pelo id',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
