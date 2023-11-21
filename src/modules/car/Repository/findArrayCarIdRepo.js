import { db } from '../../../config/db.js';

export const findArrayCarIdRepo = async () => {
  try {
    const test = await db.car.findMany({
      select: {
        id: true,
      },
    });
    return test;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
