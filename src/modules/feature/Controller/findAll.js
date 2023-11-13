import { HttpStatusCode } from 'axios';
import { findAllFeatureService } from '../Service/findAllFeatureService.js';

export const findAll = async (req, res) => {
  try {
    const { take, skip } = req.query;

    const featuresFinded = await findAllFeatureService(take, skip);
    console.log(featuresFinded);
    return res.status(HttpStatusCode.Ok).json({
      data: {
        totalPages: featuresFinded.totalPages,
        currentPage: skip,
        pageRecords: featuresFinded.featureFromRepo.featureFromDb.length,
        totalRegisters: featuresFinded.featureFromRepo.total,
        features: featuresFinded.featureFromRepo.featureFromDb,
      },
    });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};
