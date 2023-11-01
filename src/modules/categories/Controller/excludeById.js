import { HttpStatusCode } from 'axios';
import { excludeCategoryService } from '../Service/excludeCategoryService.js';
export const excludeById = async (req, res) => {
  try {
    const { id } = req.params;

    const resultFromService = await excludeCategoryService(id);
    switch (resultFromService.message) {
      case 'Categoria não existente no sistema':
        return res.status(HttpStatusCode.Unauthorized).json({
          message:
            'Categoria já está excluida ou nunca foi registrada no sistema !',
        });
      case 'Excluindo categoria...':
        return res.status(HttpStatusCode.Ok).json({
          status: true,
          result: {
            data: resultFromService.name,
            message: 'Categoria excluida com sucesso !',
          },
        });
    }
  } catch (error) {
    res.status(HttpStatusCode.BadRequest);
  }
};
