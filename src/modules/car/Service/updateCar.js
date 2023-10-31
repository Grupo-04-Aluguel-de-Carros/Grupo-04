import { HttpStatusCode } from 'axios';
import { updateCarRepo } from '../Repository/index.js';
import { findCarById } from './findCarById.js';
import { findStoreById } from '../../store/Service/findStoreById.js';

export const updateCar = async (id, updateBody) => {
  const { storeId } = updateBody;
  try {
    const existsCar = await findCarById(id);
    if (!existsCar) {
      throw {
        message: 'Não foi possivel encontrar o carro',
        status: HttpStatusCode.NotFound,
      };
    }

    if (storeId) {
      const existsStore = await findStoreById(storeId);
      if (!existsStore) {
        throw {
          message: 'Não foi possivel encontrar a loja',
          status: HttpStatusCode.NotFound,
        };
      }
    }

    return await updateCarRepo(id, updateBody);
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
