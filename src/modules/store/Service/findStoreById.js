import { HttpStatusCode } from 'axios';
import { findStoreByIdRepo } from '../Repository/index.js';

export const findStoreById = async id => {
  try {
    return await findStoreByIdRepo(id);
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
