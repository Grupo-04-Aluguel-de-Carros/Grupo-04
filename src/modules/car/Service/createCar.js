import { HttpStatusCode } from 'axios';
import { createCarRepo } from '../Repository/index.js';
import { findStoreById } from '../../store/Service/findStoreById.js';
import { findBrandById } from '../../brand/Service/findBrandById.js';

export const createCar = async (name, color, imageUrl, storeId, brandId) => {
  const existsStore = await findStoreById(storeId);
  if (!existsStore) {
    throw {
      message: 'Não foi possivel encontrar a loja pelo id',
      status: HttpStatusCode.NotFound,
    };
  }

  const existsBrand = await findBrandById(brandId);

  if (!existsBrand) {
    throw {
      message: 'Não foi possivel encontrar a marca pelo id',
      status: HttpStatusCode.NotFound,
    };
  }
  try {
    return await createCarRepo(name, color, imageUrl, storeId, brandId);
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
