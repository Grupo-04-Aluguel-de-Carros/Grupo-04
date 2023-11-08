import { updateStore } from '../Service/index.js';

export const update = async (req, res) => {
  const { id } = req.params;
  const { name, brands } = req.body;

  try {
    const result = await updateStore(id, { name, brands });

    return res.json(result);
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
};
