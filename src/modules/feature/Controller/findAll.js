import { HttpStatusCode } from 'axios';
import { findAllFeatureService } from '../Service/findAllFeatureService.js';

export const findAll = async (req, res) => {
  try {
    const { currentPage, listPerPage, offset } = req.pagination;

    const featuresFinded = await findAllFeatureService(listPerPage, offset);

    return res.status(HttpStatusCode.Ok).json({
      data: {
        totalPages: featuresFinded.totalPages,
        currentPage: currentPage,
        pageRecords: featuresFinded.featureFromRepo.featureFromDb.length,
        totalRegisters: featuresFinded.featureFromRepo.total,
        features: featuresFinded.featureFromRepo.featureFromDb,
      },
    });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};
