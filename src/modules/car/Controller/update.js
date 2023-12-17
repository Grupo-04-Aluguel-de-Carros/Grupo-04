import { updateCar } from '../Service/index.js';

export const update = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    color,
    storeId,
    categoryId,
    brandId,
    description,
    model,
    value,
    year,
    available,
  } = req.body;
  try {
    const result = await updateCar(id, {
      name,
      color,
      storeId,
      categoryId,
      brandId,
      description,
      model,
      value,
      year,
      available,
    });

    return res.json(result);
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
