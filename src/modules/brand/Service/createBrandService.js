import { createBrandRepo } from "../Repository/createBrandRepo.js";

export const createBrandService = async ({ name }) => { 
  await createBrandRepo(name)
};