import { HttpStatusCode } from 'axios';
import { findAllCategoriesService } from '../Service/findAllCategoriesService.js';
export const findAllCategories = async (req, res) => {
  try {
    const resultFromService = await findAllCategoriesService();
    console.log(resultFromService);
    return res.status(HttpStatusCode.Ok).json({
      status: true,
      result: {
        data: resultFromService,
        message: `Lista de categorias registradas no nosso sistema !`,
      },
    });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
