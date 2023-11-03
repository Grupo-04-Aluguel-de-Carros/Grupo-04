import { HttpStatusCode } from 'axios';
import { findUserByIdRepo } from '../Repository/index.js';

export const findUserById = async id => {
  try {
    const existsUser = await findUserByIdRepo(id);

    if (!existsUser) {
      throw {
        message: 'Usuário não encontrado',
        status: HttpStatusCode.NotFound,
      };
    }
    return existsUser;
  } catch (error) {
    throw { message: error.message, status: error.status };
  }
};
