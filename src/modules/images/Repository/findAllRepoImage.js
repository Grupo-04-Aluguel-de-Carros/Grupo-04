import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findAllRepoImage = async (listPerPage, offset) => {
  try {
    const [resultFromRepo, total] = await db.$transaction([
      db.images.findMany({
        take: listPerPage,
        skip: offset,
      }),
      db.images.count(),
    ]);
    return { resultFromRepo, total };
  } catch (error) {
    throw {
      message: error.message,
      status: HttpStatusCode.InternalServerError || error.status,
    };
  }
};
