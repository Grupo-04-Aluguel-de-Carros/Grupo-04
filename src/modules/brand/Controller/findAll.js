import { HttpStatusCode } from 'axios';
import { findBrandService } from '../Service/findBrandService.js';

export const findAll = async (req, res) => {
  try {
    const { take, skip } = req.query;
    const recordPerPage = take;
    const page = skip;
    const { result, totalPages } = await findBrandService(recordPerPage, page);

    return res.status(HttpStatusCode.Ok).json({
      status: true,
      totalPages,
      currentPage: page,
      recordsInThisPage: result.brand.length,
      totalRecords: result.total,
      brands: result.brand,
      message: 'Lista das marcas registradas no negócio !',
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
