import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findCarByIdRepo = async id => {
  try {
    return db.car.findUnique({
      where: { id },
    });
  } catch (error) {
    throw {
      message: 'Não foi buscar o carro pelo id.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
