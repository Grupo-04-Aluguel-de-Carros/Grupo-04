import { HttpStatusCode } from 'axios';
import {
  createUserRepo,
  deleteUserRepo,
  findManyUsersRepo,
  findUserByCpfRepo,
  findUserByEmailRepo,
  findUserByIdRepo,
  updateUserRepo,
} from './user.repository.js';
import { hashSync } from 'bcrypt';
import { validateCPF } from '../../utils/cpfValidator.js';
import { removeSpecialCharacters } from '../../utils/removeSpecialCharacters.js';

export const createUser = async (
  name,
  surname,
  email,
  cpf,
  phoneNumber,
  age,
  password
) => {
  try {
    password = hashSync(password, 12);
    cpf = removeSpecialCharacters(cpf);

    if (!validateCPF(cpf)) {
      throw new Error('Cpf inválido.', HttpStatusCode.BadRequest);
    }

    const cpfExists = await findUserByCpfRepo(cpf);
    if (cpfExists) {
      throw new Error('Cpf já cadastrado.', HttpStatusCode.BadRequest);
    }

    const emailExists = await findUserByEmailRepo(email);

    if (emailExists) {
      throw new Error('Email já cadastrado.', HttpStatusCode.BadRequest);
    }

    if (Number(age) < 18) {
      throw new Error(
        'Aplicação proibida para menores de 18 anos',
        HttpStatusCode.BadRequest
      );
    }

    phoneNumber = removeSpecialCharacters(phoneNumber);
    return await createUserRepo(
      name,
      surname,
      email,
      cpf,
      phoneNumber,
      age,
      password
    );
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};

export const findUserById = async id => {
  try {
    return await findUserByIdRepo(id);
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.NotFound);
  }
};

export const updateUser = async (id, updateBody) => {
  try {
    const existUser = await findUserById(id);
    if (!existUser) {
      throw new Error('Usuário não cadastrado', HttpStatusCode.NotFound);
    }

    const { email, cpf } = updateBody;

    if (email) {
      const existsEmail = await findUserByEmailRepo(email);
      if (existsEmail.email && existUser.email !== email) {
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

export const findManyUsers = async () => {
  try {
    return await findManyUsersRepo();
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.NotFound);
  }
};
