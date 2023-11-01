import { updateCar } from '../Service/index.js';

export const update = async (req, res) => {
  const { id } = req.params;
  const { name, color, imageUrl, storeId, categoryId, brandId } = req.body;
  try {
    const result = await updateCar(id, {
      name,
      color,
      imageUrl,
      storeId,
      categoryId,
      brandId,
    });

    return res.json(result);
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
