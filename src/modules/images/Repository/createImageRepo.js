import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createImageRepo = async imageObject => {
  try {
    const imageCreated = db.images.create({
      data: {
        name: imageObject.name,
        urlBrand: imageObject.urlBrand,
        carId: imageObject.carId,
        urlCar: imageObject.urlCar.map(x => x),
      },
    });
    return imageCreated;
  } catch (error) {
    console.log('Error==>', error);
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
