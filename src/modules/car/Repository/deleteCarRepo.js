import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const deleteCarRepo = async id => {
  try {
    return await db.car.delete({ where: { id } });
  } catch (error) {
    throw {
      message: 'Não foi possivel encontrar a loja',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
