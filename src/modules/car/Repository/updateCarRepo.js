import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const updateCarRepo = async (id, updateBody) => {
  try {
    return await db.car.update({
      data: updateBody,
      where: { id },
    });
  } catch (error) {
    throw {
      message: 'Não foi possivel atualizar o carro',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
