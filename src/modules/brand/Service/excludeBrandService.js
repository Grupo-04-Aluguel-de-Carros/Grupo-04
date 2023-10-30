import { excludeBrandRepo } from '../Repository/excludeBrandRepo.js';

export const excludeBrandService = async id => {
  const result = await excludeBrandRepo(id);
  return result;
};
