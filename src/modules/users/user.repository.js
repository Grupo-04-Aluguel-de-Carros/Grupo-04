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
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        cpf: true,
        phoneNumber: true,
        age: true,
        createdAt: true,
        updatedAt: true,
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

export const findUserByCpfRepo = async cpf => {
  try {
    return await db.user.findUnique({
      where: { cpf },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        cpf: true,
        phoneNumber: true,
        age: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível buscar o usuário pelo cpf.',
      HttpStatusCode.BadRequest
    );
  }
};

export const findUserByEmailRepo = async email => {
  try {
    return await db.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        cpf: true,
        phoneNumber: true,
        age: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível buscar o usuário pelo email.',
      HttpStatusCode.BadRequest
    );
  }
};

export const updateUserRepo = async (id, updateBody) => {
  try {
    return await db.user.update({
      data: updateBody,
      where: { id },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        cpf: true,
        phoneNumber: true,
        age: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível atualizar o usuário.',
      HttpStatusCode.BadRequest
    );
  }
};

export const findUserByIdRepo = async id => {
  try {
    return await db.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        cpf: true,
        phoneNumber: true,
        age: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível buscar o usuário pelo id.',
      HttpStatusCode.BadRequest
    );
  }
};

export const deleteUserRepo = async id => {
  try {
    return await db.user.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível deletetar o usuário.',
      HttpStatusCode.BadRequest
    );
  }
};

export const findManyUsersRepo = async () => {
  try {
    return await db.user.findMany({
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        cpf: true,
        phoneNumber: true,
        age: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível procurar os usuários.',
      HttpStatusCode.BadRequest
    );
  }
};
