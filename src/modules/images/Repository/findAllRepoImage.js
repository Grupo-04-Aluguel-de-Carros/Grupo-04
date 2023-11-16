import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findAllRepoImage = async (recordsPerPage, currentPage) => {
  try {
    const [resultFromRepo, total] = await db.$transaction([
      db.images.findMany({
        take: recordsPerPage,
        skip: currentPage,
      }),
      db.images.count(),
    ]);
    return { resultFromRepo, total };
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};
