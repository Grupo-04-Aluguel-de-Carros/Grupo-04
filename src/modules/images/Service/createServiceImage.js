import { createImageRepo } from '../Repository/createImageRepo.js';

export const createServiceImage = async imageObject => {
  try {
    const imageFromRepo = await createImageRepo(imageObject);

    return imageFromRepo;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
