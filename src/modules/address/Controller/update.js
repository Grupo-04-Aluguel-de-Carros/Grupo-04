import { updateAddress } from '../Service/index.js';

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      cep,
      street,
      city,
      state,
      number,
      neighborhood,
      complement,
      storeId,
      userId,
    } = req.body;

    const result = await updateAddress(id, {
      cep,
      street,
      city,
      state,
      number,
      neighborhood,
      complement,
      storeId,
      userId,
    });

    return res.json(result);
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
