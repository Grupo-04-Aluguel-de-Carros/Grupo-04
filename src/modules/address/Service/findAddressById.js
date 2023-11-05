import { HttpStatusCode } from 'axios';
import { findAddressByIdRepo } from '../Repository/index.js';

export const findAddressById = async id => {
  try {
    const existsAddress = await findAddressByIdRepo(id);
    if (!existsAddress) {
      throw {
        message: 'Endereço não encontrado',
        status: HttpStatusCode.NotFound,
      };
    }

    return existsAddress;
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
