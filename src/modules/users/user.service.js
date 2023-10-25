import { HttpStatusCode } from 'axios';
import {
  createUserRepo,
  findUserByCpfRepo,
  findUserByEmailRepo,
} from './user.repository.js';

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
    console.log('error', error);
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
