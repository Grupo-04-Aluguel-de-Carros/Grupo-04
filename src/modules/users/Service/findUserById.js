import { HttpStatusCode } from 'axios';
import { findUserByIdRepo } from '../Repository/index.js';

export const findUserById = async id => {
  try {
    return await findUserByIdRepo(id);
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.NotFound);
  }
};
