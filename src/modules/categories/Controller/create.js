import { HttpStatusCode } from 'axios';
import { createCategoryService } from '../Service/createCategoryService.js';
export const create = async (req, res) => {
  try {
    const { qualification, description } = req.body;

    const resultFromService = await createCategoryService(
      qualification,
      description
    );

    switch (resultFromService.message) {
      case 'Categoria já registrada no sistema':
        return res.status(HttpStatusCode.Unauthorized).json({
          message: 'Categoria já registrada no sistema',
        });
      case 'Categoria nova no sistema':
        return res.status(HttpStatusCode.Ok).json({
          status: true,
          result: {
            data: resultFromService.qualification,
            message: 'Categoria registrada com sucesso !',
          },
        });
    }
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
