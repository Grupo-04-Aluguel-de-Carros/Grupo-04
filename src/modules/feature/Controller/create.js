import { HttpStatusCode } from 'axios';
import { createFeatureService } from '../Service/createFeatureService.js';

export const create = async (req, res) => {
  try {
    const {
      massageSystem,
      shielding,
      sunRoof,
      automatic,
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
      automatic,
      selfDriving,
      zeroToHundred,
      displacement,
      power,
      velocity,
      carId
    );

    return res.status(HttpStatusCode.Created).json({
      data: featureCreated,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status).json({ error: error.message });
  }
};
