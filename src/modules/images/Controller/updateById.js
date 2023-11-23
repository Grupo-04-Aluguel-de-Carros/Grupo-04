import { HttpStatusCode } from 'axios';
import { updateServiceImageById } from '../Service/updateServiceImageById.js';

export const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, urlBrand, urlCar } = req.body;

    const resultUpdateFromService = await updateServiceImageById(id, {
      name,
      urlBrand,
      urlCar,
    });

    return res.status(HttpStatusCode.Ok).json({
      data: resultUpdateFromService,
    });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};
