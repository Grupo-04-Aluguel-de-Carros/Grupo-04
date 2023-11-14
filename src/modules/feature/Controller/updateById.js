import { HttpStatusCode } from 'axios';
import { updateFeatureService } from '../Service/updateFeatureService.js';

export const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      massageSystem,
      shielding,
      sunRoof,
      automatic,
      selfDriving,
      carId,
    } = req.body;
    const resultFromService = await updateFeatureService(id, {
      name,
      massageSystem,
      shielding,
      sunRoof,
      automatic,
      selfDriving,
      carId,
    });

    return res.status(HttpStatusCode.Ok).json({
      data: resultFromService,
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
