import { findAllCategoriesRepo } from '../Repository/findAllCategoriesRepo.js';

export const findAllCategoriesService = async () => {
  try {
    const resultFromRepo = await findAllCategoriesRepo();
    console.log(resultFromRepo.length);
    switch (resultFromRepo.length === 0) {
      case true:
        return {
          message: 'Nenhuma categoria no sistema foi encontrado !',
          data: null,
        };
      case false:
        return {
          message: 'Uma ou mais categorias encontradas !',
          data: resultFromRepo,
        };
    }
  } catch (error) {
    console.log(error);
  }
};
