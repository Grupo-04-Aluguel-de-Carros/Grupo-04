import { HttpStatusCode } from 'axios';
import { findStoreByNameRepo, updateStoreRepo } from '../Repository/index.js';
import { findStoreById } from './findStoreById.js';
import { findBrandById } from '../../brand/Service/findBrandById.js';

export const updateStore = async (id, updateBody) => {
  try {
    const { name, brands } = updateBody;
    console.log('updateBody ===>', updateBody);
    const existsStore = await findStoreById(id);
    if (!existsStore) {
      throw {
        message: 'Não foi possivel encontrar o usuário pelo id',
        status: HttpStatusCode.NotFound,
      };
    }

    if (name) {
      const existsStoreName = await findStoreByNameRepo(name);
      if (existsStoreName) {
        throw {
          message: 'Nome já cadastrado',
          status: HttpStatusCode.BadRequest,
        };
      }
    }

    if (updateBody.brands) {
      for (let brand of brands) {
        await findBrandById(brand);
      }
      updateBody = {
        brands: brands,
        name: name,
      };
      return await updateStoreRepo(id, updateBody);
    }

    return await updateStoreRepo(id, updateBody.brands);
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
