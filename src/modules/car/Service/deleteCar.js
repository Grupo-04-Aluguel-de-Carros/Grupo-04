import { HttpStatusCode } from 'axios';
import { deleteCarRepo } from '../Repository/index.js';

export const deleteCar = async id => {
  try {
    const existsCar = await deleteCarRepo(id);

    if (!existsCar) {
      throw {
        message: 'Não foi possivel encontrar o carro',
        status: HttpStatusCode.NotFound,
      };
    }
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
