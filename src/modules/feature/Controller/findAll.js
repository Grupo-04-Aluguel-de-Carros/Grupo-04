import { HttpStatusCode } from 'axios';
import { findAllFeatureService } from '../Service/findAllFeatureService.js';

export const findAll = async (req, res) => {
  try {
    const featuresFinded = await findAllFeatureService();

    return res.status(HttpStatusCode.Ok).json({
      data: featuresFinded,
    });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};
