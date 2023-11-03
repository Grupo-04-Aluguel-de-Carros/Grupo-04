import { findManyCarsRepo } from '../Repository/index.js';

export const findManyCars = async ({ offset, listPerPage, query, order }) => {
  try {
    return await findManyCarsRepo({ offset, listPerPage, query, order });
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
