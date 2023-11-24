import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const deleteCarRepo = async (id, dbClient = db) => {
  try {
    return await dbClient.car.delete({ where: { id } });
  } catch (error) {
    throw {
      message: 'Não foi possível excluir o carro.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
