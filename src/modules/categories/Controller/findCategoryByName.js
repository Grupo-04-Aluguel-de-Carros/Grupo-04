import { HttpStatusCode } from 'axios';
import { findCategoryByNameService } from '../Service/findCategoryByNameService.js';
export const findCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;

    const resultFromService = await findCategoryByNameService(name);

    console.log(resultFromService);
    switch (resultFromService.data !== null) {
      case true:
        return res.status(HttpStatusCode.Ok).json({
          status: true,
          result: {
            data: resultFromService.data,
            message: `Categoria ${name} localizada com sucesso !`,
          },
        });
      case false:
        return res.status(HttpStatusCode.NoContent).json();
    }
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
