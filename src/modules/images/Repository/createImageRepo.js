import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createImageRepo = async imageObject => {
  try {
    const imageCreated = db.images.create({
      data: imageObject,
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
