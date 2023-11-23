import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createUserRepo = (
  name,
  surname,
  email,
  cpf,
  phoneNumber,
  age,
  password,
  dbClient = db
) => {
  try {
    return dbClient.user.create({
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
    throw {
      message: 'Não foi possível criar o usuário.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
