import { db } from '../../../config/db.js';

export const excludeBrandRepo = async id => {
  console.log(id);
  try {
    const deleteBrand = await db.brand.delete({
      where: {
        id: id,
      },
    });
    return deleteBrand;
  } catch (error) {
    throw {
      message: 'Não foi possível conectar com o BD !',
      status: HttpStatusCode.InternalServerError,
    };
  }
};
