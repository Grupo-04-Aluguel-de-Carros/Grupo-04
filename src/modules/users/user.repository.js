import { HttpStatusCode } from 'axios';
import { db } from '../../config/db.js';

export const createUserRepo = (
  name,
  surname,
  email,
  cpf,
  phoneNumber,
  age,
  password
) => {
  try {
    return db.user.create({
      data: {
        name,
        surname,
        email,
        cpf,
        phoneNumber,
        age,
        password,
      },
    });
  } catch (error) {
    console.log('error', error);
    throw new Error(
      'Não foi possível criar o usuário.',
      HttpStatusCode.BadRequest
    );
  }
};

export const findUserByCpfRepo = cpf => {
  try {
    return db.user.findUnique({
      where: { cpf },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível possível buscar o usuário pelo cpf.',
      HttpStatusCode.BadRequest
    );
  }
};

export const findUserByEmailRepo = email => {
  try {
    return db.user.findUnique({
      where: { email },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível possível buscar o usuário pelo email.',
      HttpStatusCode.BadRequest
    );
  }
};

export const updateUserRepo = ({
  name,
  surname,
  email,
  cpf,
  phoneNumber,
  age,
  password,
}) => {
  try {
    return db.user.update({
      data: {
        name,
        surname,
        email,
        cpf,
        phoneNumber,
        age,
        password,
      },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível possível atualizar o usuário.',
      HttpStatusCode.BadRequest
    );
  }
};

export const findUserByIdRepo = id => {
  try {
    return db.user.findUnique({ where: { id } });
  } catch (error) {
    throw new Error(
      'Não foi possível possível buscar o usuário pelo id.',
      HttpStatusCode.BadRequest
    );
  }
};
