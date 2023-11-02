import { excludeBrandRepo } from '../Repository/excludeBrandRepo.js';
import { findBrandByIdRepo } from '../Repository/findBrandByIdRepo.js';

export const excludeBrandService = async id => {
  const verifyBrandById = await findBrandByIdRepo(id);
  console.log(verifyBrandById);
  if (!verifyBrandById) {
    return {
      message: 'Marca não existente no sistema',
      name: verifyBrandById,
    };
  }

  const resultFromRepository = await excludeBrandRepo(id);
  return {
    message: 'Excluindo marca...',
    name: resultFromRepository,
  };
};
