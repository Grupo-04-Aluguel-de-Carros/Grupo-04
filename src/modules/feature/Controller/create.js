import { HttpStatusCode } from 'axios';
import { createFeatureService } from '../Service/createFeatureService.js';

export const create = async (req, res) => {
  try {
    const {
      name,
      massageSystem,
      shielding,
      sunRoof,
      automatic,
      selfDriving,
      carId,
    } = req.body;
    const featureCreated = await createFeatureService(
      {
        name,
        massageSystem,
        shielding,
        sunRoof,
        automatic,
        selfDriving,
      },
      carId
    );

    return res.status(HttpStatusCode.Created).json({
      data: featureCreated,
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
