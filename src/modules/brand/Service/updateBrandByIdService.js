import { findBrandByIdRepo } from '../Repository/findBrandByIdRepo.js';
import { updateBrandByIdRepo } from '../Repository/updateBrandByIdRepo.js';

export const updateBrandByIdService = async (name, id) => {
  const verifyBrand = await findBrandByIdRepo(id);
  console.log(verifyBrand);
  if (verifyBrand === null) {
    return {
      message: `O id de numero ${id} não existe`,
      name: verifyBrand,
    };
  } else {
    const brandUpdated = await updateBrandByIdRepo(name, id);
    return { message: 'Marca de id existente', name: brandUpdated.name };
  }
};
