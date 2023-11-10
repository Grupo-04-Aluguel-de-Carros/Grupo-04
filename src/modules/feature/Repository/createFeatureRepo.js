import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createFeatureRepo = async (
  massageSystem,
  shielding,
  sunRoof,
  gearLever,
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
        gearLever,
        selfDriving,
        zeroToHundred,
        displacement,
        power,
        velocity,
        cars: {
          create: {
            carId: carId,
          },
        },
      },
      /*         Car: {
          connect: {
            id: carId,
          },
        },
      }, */
      include: {
        Car: true,
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
