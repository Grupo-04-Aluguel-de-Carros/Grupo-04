import { db } from '../../../config/db.js';
import { HttpStatusCode } from 'axios';

export const excludeBrandRepo = async id => {
  try {
    const deleteBrand = await db.brand.delete({
      where: {
        id: id,
      },
    });
    return deleteBrand;
  } catch (error) {
    console.log('Error ==>', error);
    throw {
      message: 'Não foi possível conectar com o BD !',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
