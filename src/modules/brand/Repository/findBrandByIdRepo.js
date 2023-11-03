import { db } from '../../../config/db.js';

export const findBrandByIdRepo = async id => {
  try {
    const brand = await db.brand.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
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
