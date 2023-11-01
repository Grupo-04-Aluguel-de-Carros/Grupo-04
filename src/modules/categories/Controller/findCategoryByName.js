import { HttpStatusCode } from 'axios';
import { findCategoryByNameService } from '../Service/findCategoryByNameService.js';
export const findCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;

    const resultFromService = await findCategoryBynameService(name);

    return res.status(HttpStatusCode.Ok).json({
      status: true,
      result: {
        data: resultFromService,
        message: `Categoria ${name} localizada com sucesso !`,
      },
    });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
