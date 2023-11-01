import { HttpStatusCode } from 'axios';
import { updateAddressRepo } from '../Repository/index.js';
import { findAddressById } from './findAddressById.js';
import { findUserById } from '../../users/Service/index.js';
import { findStoreById } from '../../store/Service/findStoreById.js';

export const updateAddress = async (id, updateBody) => {
  try {
    const existsAddress = await findAddressById(id);
    if (!existsAddress) {
      throw {
        message: 'Endereço não encontrado',
        status: HttpStatusCode.NotFound,
      };
    }

    const { userId, storeId } = updateBody;

    if (userId) {
      const existsUser = await findUserById(userId);
      if (!existsUser) {
        throw {
          message: 'Usuário não encontrado',
          status: HttpStatusCode.NotFound,
        };
      }
    }

    if (storeId) {
      const existsStore = await findStoreById(storeId);
      if (!existsStore) {
        throw {
          message: 'Loja não encontrada não encontrado',
          status: HttpStatusCode.NotFound,
        };
      }
    }

    return updateAddressRepo(id, updateBody);
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
