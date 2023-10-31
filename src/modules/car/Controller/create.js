import { HttpStatusCode } from 'axios';
import { createCar } from '../Service/index.js';

export const create = async (req, res) => {
  const { name, color, imageUrl, storeId, categoryId, brandId } = req.body;
  try {
    const result = await createCar(
      name,
      color,
      imageUrl,
      storeId,
      categoryId,
      brandId
    );

    return res.status(HttpStatusCode.Created).json(result);
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
