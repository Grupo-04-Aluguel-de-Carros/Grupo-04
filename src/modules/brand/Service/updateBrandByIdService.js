import { HttpStatusCode } from 'axios';
import { findBrandByIdRepo } from '../Repository/findBrandByIdRepo.js';
import { updateBrandByIdRepo } from '../Repository/updateBrandByIdRepo.js';

export const updateBrandByIdService = async (name, id) => {
  const verifyBrand = await findBrandByIdRepo(id);
  try {
    if (!verifyBrand) {
      throw {
        message: 'Marca não existente',
        status: HttpStatusCode.NotFound,
      };
    }
    const brandUpdated = await updateBrandByIdRepo(name, id);
    return { message: 'Marca de id existente', name: brandUpdated.name };
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
