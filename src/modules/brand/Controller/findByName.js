import { HttpStatusCode } from 'axios';
import { findBrandByNameService } from '../Service/findBrandByNameService.js';

export const findByName = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await findBrandByNameService(name);

    switch (result.message) {
      case 'Marca inexistente no sistema !':
        return res.status(HttpStatusCode.NoContent).json();
      case 'Marca encontrada':
        return res.status(HttpStatusCode.Ok).json({
          status: true,
          result: {
            data: result,
          },
        });
    }
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
