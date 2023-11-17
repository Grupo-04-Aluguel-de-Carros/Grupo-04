import { HttpStatusCode } from 'axios';
import { findAllServiceImage } from '../Service/findAllServiceImage.js';

export const findAllImages = async (req, res) => {
  try {
    const { currentPage, listPerPage, offset } = req.pagination;
    const resultFromFindAll = await findAllServiceImage( listPerPage, offset);

    return res.status(HttpStatusCode.Ok).json({
      totalPages: resultFromFindAll.totalPages,
      currentPage: currentPage,
      totalRegisters: resultFromFindAll.resultFromRepo.total,
      pageRecords: resultFromFindAll.resultFromRepo.resultFromRepo.length,
      data: resultFromFindAll.resultFromRepo.resultFromRepo,
    });
  } catch (error) {
    console.log('Error ==> ', error);
    return res.status(error.status).json({
      message: error.message,
    });
  }
};
