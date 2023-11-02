import { createBrandRepo } from '../Repository/createBrandRepo.js';
import { findBrandByNameRepo } from '../Repository/findBrandByNameRepo.js';

export const createBrandService = async ({ name }) => {
  // const brandName = name;

  const verifyBrand = await findBrandByNameRepo(name);
  if (verifyBrand !== null) {
    return {
      message: 'Marca já registrada no sistema !',
      name: verifyBrand.name,
    };
  } else {
    const brandCreated = await createBrandRepo(name);
    return { message: 'Marca nova no sistema !', name: brandCreated };
  }
};
