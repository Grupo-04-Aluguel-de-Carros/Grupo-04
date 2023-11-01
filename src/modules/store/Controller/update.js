import { updateStore } from '../Service/index.js';

export const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const result = await updateStore(id, name);

    return res.json(result);
  } catch (error) {
    return res.status(error.style).json({ error: error.message });
  }
};
