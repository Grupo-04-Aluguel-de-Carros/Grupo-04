import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const createAddressRepo = (
  cep,
  street,
  city,
  state,
  number,
  neighborhood,
  complement,
  storeId,
  userId
) => {
  try {
    return db.address.create({
      data: {
        cep,
        street,
        city,
        state,
        number,
        neighborhood,
        complement,
        storeId,
        userId,
      },
    });
  } catch (error) {
    throw new Error(
      'Não foi possível criar o endereço.',
      HttpStatusCode.BadRequest
    );
  }
};
