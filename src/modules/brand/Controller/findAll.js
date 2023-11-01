import { HttpStatusCode } from 'axios';
import { findBrandService } from '../Service/findBrandService.js';

export const findAll = async (req, res) => {
  try {
    const result = await findBrandService();
    switch (result.length != 0) {
      case false:
        return res.status(HttpStatusCode.NoContent).json();
      case true:
        return res.status(HttpStatusCode.Ok).json({
          status: true,
          result: {
            data: result,
            message: 'Lista das marcas registradas no negócio !',
          },
        });
    }
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
