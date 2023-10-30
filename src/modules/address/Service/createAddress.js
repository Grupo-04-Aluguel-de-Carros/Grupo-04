import { HttpStatusCode } from 'axios';
import { createAddressRepo } from '../Repository/index.js';
import { findUserById } from '../../users/Service/index.js';

export const createAddress = async (
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
    if (!storeId && !userId) {
      throw new Error(
        'É necessário vincular o endereço à uma loja ou usuário',
        HttpStatusCode.NotFound
      );
    }

    if (userId) {
      await findUserById(userId);
    }

    return await createAddressRepo(
      cep,
      street,
      city,
      state,
      number,
      neighborhood,
      complement,
      storeId,
      userId
    );
  } catch (error) {
    console.log('error', error);
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
