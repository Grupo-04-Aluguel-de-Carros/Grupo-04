import { HttpStatusCode } from 'axios';
import { findCategoryByQualificationService } from '../Service/findCategoryByQualificationService.js';
export const findCategoryByQualification = async (req, res) => {
  try {
    const { qualification } = req.params;

    const resultFromService = await findCategoryByQualificationService(
      qualification
    );

    return res.status(HttpStatusCode.Ok).json({
      status: true,
      result: {
        data: resultFromService,
        message: `Categoria ${qualification} localizada com sucesso !`,
      },
    });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
