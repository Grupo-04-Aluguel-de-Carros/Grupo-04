import { HttpStatusCode } from 'axios';
import { createFeatureService } from '../Service/createFeatureService.js';

export const create = async (req, res) => {
  try {
    const {
      massageSystem,
      shielding,
      sunRoof,
      gearLever,
      selfDriving,
      zeroToHundred,
      displacement,
      power,
      velocity,
    } = req.body;
    const resultFromService = createFeatureService(
      massageSystem,
      shielding,
      sunRoof,
      gearLever,
      selfDriving,
      zeroToHundred,
      displacement,
      power,
      velocity
    );
    // console.log(resultFromService);
    return res.status(HttpStatusCode.Ok).json({
      data: massageSystem,
    });
  } catch (error) {
    console.log(error);
  }
};
