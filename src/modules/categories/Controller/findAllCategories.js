import { HttpStatusCode } from 'axios';
import { findAllCategoriesService } from '../Service/findAllCategoriesService.js';
export const findAllCategories = async (req, res) => {
  try {
    const resultFromService = await findAllCategoriesService();

    switch (resultFromService.data === null) {
      case true:
        return res.status(HttpStatusCode.NoContent).json();
      case false:
        return res.status(HttpStatusCode.Ok).json({
          status: true,
          result: resultFromService,
        });
    }
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest);
  }
};
