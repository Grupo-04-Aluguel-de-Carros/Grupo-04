import { HttpStatusCode } from 'axios';
import { findUserById } from './index.js';
import { deleteUserRepo } from '../Repository/index.js';

export const deleteUser = async id => {
  try {
    const existUser = await findUserById(id);
    if (!existUser) {
      throw {
        message: 'Usuário não cadastrado',
        status: HttpStatusCode.NotFound,
      };
    }

    return await deleteUserRepo(id);
  } catch (error) {
    throw { message: error.message, status: error.status };
  }
};
