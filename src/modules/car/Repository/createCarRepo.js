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
  description
) => {
  try {
    return await db.car.create({
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
    console.log('error', error);
    throw {
      message: 'Não foi possivel criar o carro',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
