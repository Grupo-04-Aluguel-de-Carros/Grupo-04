import { HttpStatusCode } from 'axios';
import { excludeCategoryService } from '../Service/excludeCategoryService.js';
export const excludeById = async (req, res) => {
  try {
    const { id } = req.params;

    const resultFromService = await excludeCategoryService(id);
    return res.status(HttpStatusCode.Ok).json({
      status: true,
      result: {
        data: resultFromService,
        message: `A categoria de ${id} foi excluida com sucesso`,
      },
    });
  } catch (error) {
    res.status(HttpStatusCode.BadRequest);
  }
};
