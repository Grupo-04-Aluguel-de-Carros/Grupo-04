import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createFeatureRepo = async (
  massageSystem,
  shielding,
  sunRoof,
  automatic,
  selfDriving,
  zeroToHundred,
  displacement,
  power,
  velocity,
  carId
) => {
  try {
    const result = await db.feature.create({
      data: {
        massageSystem,
        shielding,
        sunRoof,
        automatic,
        selfDriving,
        zeroToHundred,
        displacement,
        power,
        velocity,
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
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: HttpStatusCode.InternalServerError,
    };
  }
};
