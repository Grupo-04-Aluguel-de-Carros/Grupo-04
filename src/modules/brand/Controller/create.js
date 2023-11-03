import { HttpStatusCode } from 'axios';
import { createBrandService } from '../Service/createBrandService.js';

export const create = async (req, res) => {
  try {
    const { name } = req.body;

    const result = await createBrandService({ name });

    return res.status(HttpStatusCode.Created).json({
      status: true,
      result: {
        data: result.name,
        message: 'Marca registrada com sucesso !',
      },
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
