import { HttpStatusCode } from 'axios';
import { findBrandByIdRepo } from '../Repository/findBrandByIdRepo.js';

export const findBrandById = async id => {
  try {
    const existsBrand = await findBrandByIdRepo(id);


    if (!existsBrand) {
      throw {
        message: 'Marca não encontrada',
        status: HttpStatusCode.NotFound,
      };
    }
    return existsBrand;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
