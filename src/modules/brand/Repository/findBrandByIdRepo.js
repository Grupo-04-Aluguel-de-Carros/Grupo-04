import { db } from '../../../config/db.js';
import { HttpStatusCode } from 'axios';

export const findBrandByIdRepo = async id => {
  try {
    const brand = await db.brand.findFirst({
      where: {
        id: id,
      },
      include: {
        stores: {
          include: {
            store: true,
          },
        },
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        stores: true,
      },
    });
    return brand;
  } catch (error) {
    console.log('Error==>', error);
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
