import { db } from '../../../config/db.js';

export const updateImageRepo = async (id, objectToUpdate) => {
  try {
    const imageUpdated = await db.images.update({
      where: {
        id,
      },
      data: objectToUpdate,
    });
    return imageUpdated;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
