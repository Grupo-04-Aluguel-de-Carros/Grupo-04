import { HttpStatusCode } from 'axios';
import { register } from '../Service/register.js';

export const create = async (req, res) => {
  const { name, surname, email, cpf, phoneNumber, age, password } = req.body;

  try {
    const result = await register({
      name,
      surname,
      email,
      cpf,
      phoneNumber,
      age,
      password,
    });

    return res.status(HttpStatusCode.Created).json(result);
  } catch (error) {
    console.log('error ==>', error);
    return res.status(error.status).json({ error: error.message });
  }
};
