import { HttpStatusCode } from 'axios';
import { createCar } from '../Service/index.js';

export const create = async (req, res) => {
  const {
    name,
    color,
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
    console.log('error', error);
    return res
      .status(error.status || HttpStatusCode.InternalServerError)
      .json({ error: error.message });
  }
};
