import { HttpStatusCode } from 'axios';
import { findManyAddressRepo } from '../Repository/index.js';

export const findManyAddress = async () => {
  try {
    return await findManyAddressRepo();
  } catch (error) {
    throw {
      message: 'Não foi possivel encontrar os endereços',
      status: HttpStatusCode.BadRequest,
    };
  }
};
