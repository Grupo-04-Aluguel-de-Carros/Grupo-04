import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findByIdFeatureRepo = async id => {
  try {
    const feature = await db.feature.findUnique({
      where: {
        id,
      },
      select: {
        cars: {
          select: {
            car: {
              select: {
                name: true,
                features: {
                  select: {
                    feature: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return feature;
  } catch (error) {
    console.log('Error ==>', error.message);
    throw {
      message: error.message,
      status: HttpStatusCode.InternalServerError,
    };
  }
};
