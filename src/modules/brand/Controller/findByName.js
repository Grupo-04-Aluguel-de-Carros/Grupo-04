import { HttpStatusCode } from 'axios';
import { findBrandByNameService } from '../Service/findBrandByNameService.js';

export const findByName = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await findBrandByNameService(name);
    return res.status(HttpStatusCode.Ok).json({
      status: true,
      result: {
        data: result,
        message: `Segue a marca ${name}`,
      },
    });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
