import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createCarRepo = async (
  name,
  color,
  imageUrl,
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
        imageUrl,
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
      message: 'Não foi possivel criar o carro',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
