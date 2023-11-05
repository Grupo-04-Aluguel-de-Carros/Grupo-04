import { HttpStatusCode } from 'axios';
import { excludeBrandService } from '../Service/excludeBrandService.js';

export const excludeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resultFromService = await excludeBrandService(id);

    return res.status(HttpStatusCode.NoContent).json({
      status: true,
      result: {
        data: resultFromService.name,
        message: 'Marca excluida com sucesso !',
      },
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
