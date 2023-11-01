import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';

export const updateAddressRepo = async (id, updateBody) => {
  try {
    return db.address.update({
      where: { id },
      data: updateBody,
    });
  } catch (error) {
    throw {
      message: 'Não foi possivel atualizar o endereço',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
