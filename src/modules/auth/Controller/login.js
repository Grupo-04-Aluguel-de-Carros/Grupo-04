import { HttpStatusCode } from 'axios';
import { authenticatedUserByEmailAndPassword } from '../Service/index.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await authenticatedUserByEmailAndPassword({
      email,
      password,
    });

    return res.json(result);
  } catch (error) {
    return res
      .status(HttpStatusCode.Unauthorized)
      .json({ error: error.message });
  }
};
