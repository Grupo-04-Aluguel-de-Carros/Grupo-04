import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const updateCarRepo = async (id, updateBody, dbClient = db) => {
  try {
    return await dbClient.car.update({
      data: updateBody,
      where: { id },
    });
  } catch (error) {
    throw {
      message: 'Não foi possível atualizar o carro.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
