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
        zeroToHundred: featureObject.zeroToHundred,
        displacement: featureObject.displacement,
        power: featureObject.power,
        velocity: featureObject.velocity,
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
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
