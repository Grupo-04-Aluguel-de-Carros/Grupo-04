import { HttpStatusCode } from 'axios';
import { db } from '../../../config/db.js';
import { throwError } from '../../../utils/throwError.js';

export const findBrandByNameRepo = async name => {
  try {
    const brand = await db.brand.findFirst({
      where: {
        name: name,
      },
      select: {
        name: true,
      },
    });
    return brand;
  } catch (error) {
    throw {
      message: 'Não foi possível conectar com o BD !',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
