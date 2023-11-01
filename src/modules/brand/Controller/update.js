import { HttpStatusCode } from 'axios';
import { updateBrandByIdService } from '../Service/updateBrandByIdService.js';

export const update = async (req, res) => {
  try {
    const { name, id } = req.body;
    const result = await updateBrandByIdService(name, id);

    switch (result.message) {
      case `O id de numero ${id} não existe`:
        return res.status(HttpStatusCode.BadRequest).json({
          message: `O id de numero ${id} não existe`,
        });
      case 'Marca de id existente':
        return res.status(HttpStatusCode.Ok).json({
          status: true,
          result: {
            data: result,
            message: `A marca de id ${id} foi atualizada`,
          },
        });
    }
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
