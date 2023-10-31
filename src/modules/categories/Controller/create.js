import { HttpStatusCode } from 'axios';
import { createCategoryService } from '../Service/createCategoryService.js';
export const create = async (req, res) => {
  try {
    const { qualification, description } = req.body;

    const resultFromService = await createCategoryService(
      qualification,
      description
    );
    return res.status(HttpStatusCode.Ok).json({
      status: true,
      result: {
        data: resultFromService,
        message: `Categoria ${qualification} registrada com sucesso !`,
      },
    });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
