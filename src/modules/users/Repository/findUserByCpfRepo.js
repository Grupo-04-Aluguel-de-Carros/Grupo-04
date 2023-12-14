import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

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
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    throw {
      message: 'Não foi possível buscar o usuário pelo cpf.',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
