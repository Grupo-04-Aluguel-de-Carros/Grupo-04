import { HttpStatusCode } from 'axios';
import { findAllFeatureService } from '../Service/findAllFeatureService.js';

export const findAll = async (req, res) => {
  const featuresFinded = await findAllFeatureService();

  console.log(featuresFinded);

  return res.status(HttpStatusCode.Ok).json({
    data: featuresFinded,
  });
};
