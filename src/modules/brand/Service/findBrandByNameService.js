import { findBrandByNameRepo } from '../Repository/findBrandByNameRepo.js';

export const findBrandByNameService = async name => {
  const verifyBrand = await findBrandByNameRepo(name);
  console.log(verifyBrand);
  if (verifyBrand === null) {
    return {
      message: 'Marca inexistente no sistema !',
      name: verifyBrand,
    };
  } else {
    return { message: 'Marca encontrada', name: verifyBrand.name };
  }
};
