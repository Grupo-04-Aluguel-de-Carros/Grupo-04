import { HttpStatusCode } from 'axios';
import { updateBrandService } from '../Service/updateBrandService.js';

export const update = async (req, res) => {
  try {
    const { name, id } = req.body;
    const result = await updateBrandService(name, id);
    return res.status(HttpStatusCode.Ok).json({
      status: true,
      result: {
        data: result,
        message: `A marca de id ${id} foi atualizada`,
      },
    });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
