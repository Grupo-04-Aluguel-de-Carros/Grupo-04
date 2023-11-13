import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createFeatureRepo = async (featureObject, carId) => {
  try {
    const result = await db.feature.create({
      data: {
        massageSystem: featureObject.massageSystem,
        shielding: featureObject.shielding,
        selfDriving: featureObject.selfDriving,
        sunRoof: featureObject.sunRoof,
        automatic: featureObject.automatic,
        cars: {
          create: carId.map(carData => ({
            car: {
              connect: {
                id: carData,
              },
            },
          })),
        },
      },
      select: {
        id: true,
        cars: { select: { car: { select: { name: true } } } },
      },
    });
    return result;
  } catch (error) {
    console.log('Error==>', error);
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
