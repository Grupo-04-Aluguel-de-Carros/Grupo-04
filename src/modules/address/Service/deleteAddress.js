import { HttpStatusCode } from 'axios';
import { deleteAddressRepo } from '../Repository/index.js';
import { findAddressById } from './findAddressById.js';

export const deleteAddress = async id => {
  try {
    const existsAddress = await findAddressById(id);
    if (!existsAddress) {
      throw {
        message: 'Endereço não encontrado',
        status: HttpStatusCode.NotFound,
      };
    }

    return await deleteAddressRepo(id);
  } catch (error) {
    throw {
      message: error.message,
      status: error.status || HttpStatusCode.InternalServerError,
    };
  }
};
