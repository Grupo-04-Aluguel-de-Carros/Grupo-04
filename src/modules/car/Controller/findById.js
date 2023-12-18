import { findCarById } from '../Service/index.js';

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findCarById(id);
    console.log(result);
    return res.json({
      id: result.id,
      name: result.name,
      color: result.color,
      model: result.model,
      available: result.available,
      description: result.description,
      value: result.value,
      year: result.year,
      imagesCar: result.Images[0]?.urlCar,
      imageBrandLogo: result.Images[0]?.urlBrand,
      Brand: result.Brand,
      Store: result.Store
    });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
