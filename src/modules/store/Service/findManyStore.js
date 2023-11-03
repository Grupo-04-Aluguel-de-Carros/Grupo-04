import { findManyStoreRepo } from '../Repository/index.js';

export const findManyStore = async ({ offset, listPerPage, query, order }) => {
  try {
    return await findManyStoreRepo({ offset, listPerPage, query, order });
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
