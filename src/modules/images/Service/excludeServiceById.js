import { excludeImageRepo } from '../Repository/excludeImageRepo.js';

export const excludeServiceById = async id => {
  try {
    const imageExcluded = await excludeImageRepo(id);

    return imageExcluded;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
