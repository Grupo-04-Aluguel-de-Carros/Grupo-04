import { HttpStatusCode } from 'axios';
import { findUserById } from './index.js';
import {
  findUserByCpfRepo,
  findUserByEmailRepo,
  updateUserRepo,
} from '../Repository/index.js';

export const updateUser = async (id, updateBody) => {
  try {
    const existUser = await findUserById(id);
    if (!existUser) {
      throw new Error('Usuário não cadastrado', HttpStatusCode.NotFound);
    }

    const { email, cpf } = updateBody;

    if (email) {
      const existsEmail = await findUserByEmailRepo(email);
      if (existsEmail && existUser.email !== email) {
        throw new Error('Email já cadastrado', HttpStatusCode.BadRequest);
      }
    }

    if (cpf) {
      const existsCpf = await findUserByCpfRepo(cpf);
      if (existsCpf && existUser.cpf !== cpf) {
        throw new Error('Cpf já cadastrado', HttpStatusCode.BadRequest);
      }
    }

    return await updateUserRepo(id, updateBody);
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
