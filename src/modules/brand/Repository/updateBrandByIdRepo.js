import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const updateBrandByIdRepo = async (name, id) => {
  try {
    const updateUser = await db.brand.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
    return updateUser;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
