import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const deleteAddressRepo = async id => {
  try {
    return await db.address.delete({ where: { id } });
  } catch (error) {
    throw {
      message: 'Não foi possivel deletar o endereço',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
