import { findBrandByNameRepo } from '../Repository/findBrandByNameRepo.js';

export const findBrandByNameService = async name => {
  const result = await findBrandByNameRepo(name);
  return result;
};
