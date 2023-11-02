import { findManyUsersRepo } from '../Repository/index.js';

export const findManyUsers = async () => {
  try {
    return await findManyUsersRepo();
  } catch (error) {
    throw { message: error.message, status: error.status };
  }
};
