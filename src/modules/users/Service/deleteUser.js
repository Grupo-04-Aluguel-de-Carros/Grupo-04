import { HttpStatusCode } from 'axios';
import { findUserById } from './index.js';
import { deleteUserRepo } from '../Repository/index.js';

export const deleteUser = async id => {
  try {
    const existUser = await findUserById(id);
    if (!existUser) {
      throw new Error('Usuário não cadastrado', HttpStatusCode.NotFound);
    }

    return await deleteUserRepo(id);
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
