import { findManyStoreRepo } from '../Repository/index.js';

export const findManyStore = async () => {
  try {
    return await findManyStoreRepo();
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
