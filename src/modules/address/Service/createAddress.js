import { HttpStatusCode } from 'axios';
import { createAddressRepo } from '../Repository/index.js';
import { findUserById } from '../../users/Service/index.js';
import { findStoreById } from '../../store/Service/index.js';

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
      throw {
        message: 'É necessário vincular o endereço à uma loja ou usuário',
        status: HttpStatusCode.NotFound,
      };
    }
    if (storeId) {
      const existsStore = await findStoreById(storeId);
      if (!existsStore) {
        throw {
          message: 'loja não encontrada',
          status: HttpStatusCode.NotFound,
        };
      }
    }

    if (userId) {
      const existsUser = await findUserById(userId);
      if (!existsUser) {
        throw {
          message: 'Usuário não encontrado',
          status: HttpStatusCode.NotFound,
        };
      }
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
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
