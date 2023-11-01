import { HttpStatusCode } from 'axios';
import { createCarRepo } from '../Repository/index.js';
import { findStoreById } from '../../store/Service/findStoreById.js';

export const createCar = async (
  name,
  color,
  imageUrl,
  storeId,
  categoryId,
  brandId
) => {
  const existsStore = await findStoreById(storeId);
  if (!existsStore) {
    throw {
      message: 'Não foi possivel encontrar a loja pelo id',
      status: HttpStatusCode.NotFound,
    };
  }
  try {
    return await createCarRepo(
      name,
      color,
      imageUrl,
      storeId,
      categoryId,
      brandId
    );
  } catch (error) {
    throw new Error(error.message, error.status);
  }
};
