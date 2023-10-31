import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findManyCarsRepo = async () => {
  try {
    return await db.car.findMany();
  } catch (error) {
    throw {
      message: 'Não foi possivel buscar a lista de carros',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
