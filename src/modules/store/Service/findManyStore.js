import { HttpStatusCode } from 'axios';
import { findManyStoreRepo } from '../Repository/index.js';

export const findManyStore = async () => {
  try {
    return await findManyStoreRepo();
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
