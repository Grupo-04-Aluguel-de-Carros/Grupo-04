import { HttpStatusCode } from 'axios';
import { createCar } from '../Service/index.js';

export const create = async (req, res) => {
  const {
    name,
    color,
    imageUrl,
    storeId,
    brandId,
    available,
    model,
    value,
    year,
    description,
  } = req.body;
  try {
    const result = await createCar(
      name,
      color,
      imageUrl,
      storeId,
      brandId,
      available,
      model,
      value,
      year,
      description
    );

    return res.status(HttpStatusCode.Created).json(result);
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
