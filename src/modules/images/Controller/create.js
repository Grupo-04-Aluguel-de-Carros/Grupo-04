import { HttpStatusCode } from 'axios';
import { createServiceImage } from '../Service/createServiceImage.js';

export const create = (req, res) => {
  try {
    const { title, urlBrand, urlCar } = req.body;

    const resultImageFromService = createServiceImage(title, urlBrand, urlCar);

    return res.status(HttpStatusCode.Created).json({
      data: resultImageFromService,
    });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};
