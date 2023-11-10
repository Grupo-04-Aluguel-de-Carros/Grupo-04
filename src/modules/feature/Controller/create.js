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
      carId,
    } = req.body;
    const featureCreated = await createFeatureService(
      massageSystem,
      shielding,
      sunRoof,
      gearLever,
      selfDriving,
      zeroToHundred,
      displacement,
      power,
      velocity,
      carId
    );
    console.log(featureCreated);
    return res.status(HttpStatusCode.Ok).json({
      data: featureCreated,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status).json({ error: error.message });
  }
};
