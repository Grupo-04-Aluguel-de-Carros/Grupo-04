import { HttpStatusCode } from 'axios';
import { createBrandService } from '../Service/createBrandService.js';

export const create = async (req, res) => {
  try {
    const { name } = req.body;

    const result = await createBrandService({ name });

    switch (result.message) {
      case 'Marca já registrada no sistema !':
        return res.status(HttpStatusCode.Unauthorized).json({
          message: 'Marca já registrada no sistema !',
        });
      case 'Marca nova no sistema !':
        return res.status(HttpStatusCode.Ok).json({
          status: true,
          result: {
            data: result.name,
            message: 'Marca registrada com sucesso !',
          },
        });
    }
  } catch (error) {
    console.log('error', error);
    return res.status(HttpStatusCode.BadRequest).json({ error: error.message });
  }
};
