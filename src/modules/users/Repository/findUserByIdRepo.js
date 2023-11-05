import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

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
        Address: { select: { cep: true, state: true, city: true } },
      },
    });
  } catch (error) {
    throw {
      message: 'Não foi possível buscar o usuário pelo id.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
