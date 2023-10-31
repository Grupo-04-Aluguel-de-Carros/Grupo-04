import { findManyCarsRepo } from '../Repository/index.js';

export const findManyCars = async () => {
  try {
    return await findManyCarsRepo();
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
