import { HttpStatusCode } from 'axios';
import { createAddress } from '../Service/index.js';

export const create = async (req, res) => {
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
  try {
    const result = await createAddress(
      cep,
      street,
      city,
      state,
      number,
      neighborhood,
      complement,
      storeId,
      userId
    );

    return res.status(HttpStatusCode.Created).json({ message: result });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
