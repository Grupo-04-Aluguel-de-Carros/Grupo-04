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
    const featureCreated = createFeatureService(
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
/*     return res.status(HttpStatusCode.Ok).json({
      data: featureCreated,
    }); */
  } catch (error) {
    console.log(error);
  }
};
