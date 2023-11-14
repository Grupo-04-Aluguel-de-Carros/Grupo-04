import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createBrandRepo = async name => {
  try {
    const brand = await db.brand.create({
      data: {
        name: name,
      },
      select: {
        name: true,
      },
    });
    return brand;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
