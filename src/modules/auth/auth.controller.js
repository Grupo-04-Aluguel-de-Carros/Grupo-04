import { createUser } from '../users/user.service.js';

export const create = async (req, res) => {
  const { name, surname, email, cpf, phoneNumber, age, password } = req.body;

  try {
    const result = await createUser(
      name,
      surname,
      email,
      cpf,
      phoneNumber,
      age,
      password
    );

    return res.json({ message: -password, result });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
