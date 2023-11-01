import { HttpStatusCode } from 'axios';
import { updateCategoryByIdService } from '../Service/updateCategoryByIdService.js';

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, qualification } = req.body;
    const resultFromService = await updateCategoryByIdService(
      description,
      qualification,
      id
    );
    return res.status(HttpStatusCode.Ok).json({
      status: true,
      result: {
        data: resultFromService,
        message: `A marca de id ${id} foi atualizada`,
      },
    });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
