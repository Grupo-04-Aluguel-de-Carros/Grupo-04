import { HttpStatusCode } from 'axios';
import { excludeBrandService } from '../Service/excludeBrandService.js';

export const excludeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resultFromService = await excludeBrandService(id);
    console.log(resultFromService.message);
    switch (resultFromService.message) {
      case 'Marca não existente no sistema':
        return res.status(HttpStatusCode.NotFound).json({
          message:
            'Marca já está excluida ou nunca foi registrada no sistema !',
        });
      case 'Excluindo marca...':
        return res.status(HttpStatusCode.NoContent).json({
          status: true,
          result: {
            data: resultFromService.name,
            message: 'Marca excluida com sucesso !',
          },
        });
    }
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
