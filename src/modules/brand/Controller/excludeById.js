import { HttpStatusCode } from 'axios';
import { excludeBrandService } from '../Service/excludeBrandService.js';

export const excludeById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await excludeBrandService(id);

    return res.status(HttpStatusCode.Ok).json({
      status: true,
      result: {
        data: result,
        message: 'Marca excluida com sucesso',
      },
    });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
