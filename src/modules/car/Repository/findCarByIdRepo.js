import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findCarByIdRepo = async (id, dbClient = db) => {
  try {
    return dbClient.car.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        color: true,
        model: true,
        available: true,
        description: true,
        value: true,
        year: true,
        Images: { select: { urlCar: true, urlBrand: true } },
        Brand: { select: { id: true, name: true } },
        Store: { select: { id: true, name: true } },
      },
    });
  } catch (error) {
    throw {
      message: 'Não foi buscar o carro pelo id.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
