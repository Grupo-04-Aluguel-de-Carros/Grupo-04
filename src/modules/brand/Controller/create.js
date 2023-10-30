import { HttpStatusCode } from 'axios';
import { createBrandService } from '../Service/createBrandService.js';
import { validateReqSchema } from '../Dto/brandSchema.js';

export const create = async (req, res) => {
  try {
    const { name } = req.body;
    validateReqSchema(name, req.body);
    const result = await createBrandService({ name });

    return res.status(HttpStatusCode.Ok).json({
      status: true,
      result: {
        data: result,
        message: 'Marca registrada com sucesso !',
      },
    });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};