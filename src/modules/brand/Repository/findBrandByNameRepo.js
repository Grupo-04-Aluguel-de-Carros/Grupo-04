import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findBrandByNameRepo = async name => {
  try {
    const brand = await db.brand.findFirst({
      where: {
        name: name,
      },
      include: {
        stores: {
          select: {
            store: {
              select: {
                name: true,
              },
            },
          },
        },
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
