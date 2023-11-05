import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findAddressByIdRepo = async id => {
  try {
    return await db.address.findFirst({
      where: { id },
      select: {
        id: true,
        street: true,
        neighborhood: true,
        number: true,
        city: true,
        state: true,
        cep: true,
        createdAt: true,
        updatedAt: true,
        Store: { select: { id: true, name: true } },
        User: {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
            phoneNumber: true,
          },
        },
      },
    });
  } catch (error) {
    throw {
      message: 'Não foi possivel buscar o endereço pelo id',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
