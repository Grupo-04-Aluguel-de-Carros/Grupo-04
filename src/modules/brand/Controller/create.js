import { HttpStatusCode } from 'axios';
import { createBrandService } from '../Service/createBrandService.js'
import { db } from '../../../config/db.js';

export const create = async (req, res) => {
    const sucess = res.status(HttpStatusCode.Ok);
    const badRequest = res.status(HttpStatusCode.BadRequest);
    try {
      const { name } = req.body;
      const result = await createBrandService( {name} );
      return sucess.json({
        data: result,
        message: 'Marca registrada com sucesso !',
      });
    } catch (error) {
      return badRequest.json({ error: error.message });
    }
  };