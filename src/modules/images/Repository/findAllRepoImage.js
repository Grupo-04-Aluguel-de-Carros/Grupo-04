import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findAllRepoImage = async () => {
  try {
    const resultFromRepo = await db.images.findMany();
    return resultFromRepo;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};
