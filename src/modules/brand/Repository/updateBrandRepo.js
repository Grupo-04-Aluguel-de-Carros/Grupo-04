import { db } from '../../../config/db.js';

export const updateBrandRepo = async (name,id) => {
  try {
    const updateUser = await db.brand.update({
        where: {
        id: id,    
        },
        data: {
          name: name,
        },
      })
    return updateUser;
  } catch (error) {
    throw new Error('É necessário o preenchimento do campo nome e id !');
  }
};
