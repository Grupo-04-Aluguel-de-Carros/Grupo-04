import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createCarRepo = async (
  name,
  color,
  storeId,
  brandId,
  available,
  model,
  value,
  year,
  description,
  dbClient = db
) => {
  try {
    return await dbClient.car.create({
      data: {
        name,
        color,
        available,
        model,
        value,
        year,
        description,
        Brand: { connect: { id: brandId } },
        Store: { connect: { id: storeId } },
      },
    });
  } catch (error) {
    throw {
      message: 'Não foi possível criar o carro.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
