import { HttpStatusCode } from 'axios';
import { findCarByIdRepo } from '../Repository/index.js';

export const findCarById = async id => {
  try {
    const existsCar = await findCarByIdRepo(id);
    if (!existsCar) {
      throw {
        message: 'Não foi possivel encontrar o carro pelo id',
        status: HttpStatusCode.NotFound,
      };
    }

    return existsCar;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
