import { HttpStatusCode } from 'axios';
import { findBrandService } from '../Service/findBrandService.js';

export const findAll = async (req, res) => {
  try {
    console.log(req.query);
    const {currentPage, listPerPage, offset} = req.pagination;
    const { name } = await req.query;
    const { result, totalPages } = await findBrandService(
      listPerPage, offset,name
    );

    return res.status(HttpStatusCode.Ok).json({
      totalPages,
      currentPage: currentPage,
      recordsInThisPage: result.brand.length,
      totalRecords: result.total,
      brands: result.brand,
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
