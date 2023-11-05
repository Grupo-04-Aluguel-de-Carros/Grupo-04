import { HttpStatusCode } from 'axios';
import { findBrandService } from '../Service/findBrandService.js';

export const findAll = async (req, res) => {
  try {
    const { take, skip } = req.query;
    const { result, totalPages } = await findBrandService(take, skip);

    return res.status(HttpStatusCode.Ok).json({
      status: true,
      totalPages,
      currentPage: skip,
      result,
      message: 'Lista das marcas registradas no negócio !',
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
