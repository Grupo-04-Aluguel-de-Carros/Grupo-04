import { addBrandToStore } from '../Service/index.js';

export const addBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { brands } = req.body;
    const result = await addBrandToStore(id, brands);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(error.status).json({ Error: error.message });
  }
};
