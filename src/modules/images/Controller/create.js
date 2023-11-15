import { HttpStatusCode } from 'axios';
import { createServiceImage } from '../Service/createServiceImage.js';

export const create = async (req, res) => {
  try {
    const { name, urlBrand, urlCar, carId } = req.body;
    
    const resultImageFromService = await createServiceImage({
      name,
      urlBrand,
      urlCar,
      carId,
    });
    return res.status(HttpStatusCode.Created).json({
      data: resultImageFromService,
    });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};
