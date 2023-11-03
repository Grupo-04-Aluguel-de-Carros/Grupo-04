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
        Brand: { include: { Car: { where: { storeId: id } } } },
        Car: { select: { name: true, brandId: true } },
      },
    });
  } catch (error) {
    throw {
      message: 'Não foi possivel buscar a loja pelo id',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
