import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const findManyAddressRepo = async () => {
  try {
    return await db.address.findMany();
  } catch (error) {
    throw {
      message: 'Não foi possivel buscar os endereços',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
