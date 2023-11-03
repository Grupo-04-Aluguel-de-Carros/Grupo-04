import { findManyUsersRepo } from '../Repository/index.js';

export const findManyUsers = async ({ offset, listPerPage, query, order }) => {
  try {
    return await findManyUsersRepo({ offset, listPerPage, query, order });
  } catch (error) {
    throw { message: error.message, status: error.status };
  }
};
