import { HttpStatusCode } from 'axios';
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

    return res.status(HttpStatusCode.Created).json({ message: result });
  } catch (error) {
    return res.status(HttpStatusCode.BadRequest).json({ error: error.message });
  }
};
