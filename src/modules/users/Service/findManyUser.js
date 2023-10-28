import { HttpStatusCode } from 'axios';
import { findManyUsersRepo } from '../Repository/index.js';

export const findManyUsers = async () => {
  try {
    return await findManyUsersRepo();
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.NotFound);
  }
};
