import { HttpStatusCode } from 'axios';
import { findAllServiceImage } from '../Service/findAllServiceImage.js';

export const findAllImages = async (req, res) => {
  try {
    const { take, skip } = req.query;
    const resultFromFindAll = await findAllServiceImage(take, skip);

    return res.status(HttpStatusCode.Ok).json({
      totalPages: resultFromFindAll.totalPages,
      currentPage: skip,
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
