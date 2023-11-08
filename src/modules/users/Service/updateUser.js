import { HttpStatusCode } from 'axios';
import { findUserById } from './index.js';
import {
  findUserByCpfRepo,
  findUserByEmailRepo,
  updateUserRepo,
} from '../Repository/index.js';
import { throwError } from '../../../utils/throwError.js';

export const updateUser = async (id, updateBody) => {
  try {
    const existUser = await findUserById(id);
    if (!existUser) {
      throwError('Usuário não cadastrado', HttpStatusCode.NotFound);
    }

    const { email, cpf } = updateBody;

    if (email) {
      const existsEmail = await findUserByEmailRepo(email);
      if (existsEmail && existUser.email !== email) {
        throw {
          message: 'Email já cadastrado',
          status: HttpStatusCode.BadRequest,
        };
      }
    }

    if (cpf) {
      const existsCpf = await findUserByCpfRepo(cpf);
      if (existsCpf && existUser.cpf !== cpf) {
        throw {
          message: 'Cpf já cadastrado',
          status: HttpStatusCode.BadRequest,
        };
      }
    }

    return await updateUserRepo(id, updateBody);
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
