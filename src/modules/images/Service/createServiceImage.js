import { createImageRepo } from '../Repository/createImageRepo.js';

export const createServiceImage = async imageObject => {
  try {
    const createdImageFromRepo = await createImageRepo(imageObject);

    return createdImageFromRepo;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
