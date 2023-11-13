import { HttpStatusCode } from 'axios';
import { excludeFeatureServiceById } from '../Service/excludeFeatureServiceById.js';

export const excludeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resultFromFeatureService = await excludeFeatureServiceById(id);

    return res.status(HttpStatusCode.NoContent).json({
      status: true,
      result: {
        data: resultFromFeatureService,
        message: 'Caracteristica excluida com sucesso !',
      },
    });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};
