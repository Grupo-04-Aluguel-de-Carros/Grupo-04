import { HttpStatusCode } from 'axios';
import { createUser } from '../users/user.service';

export const register = async ({
  name,
  surname,
  email,
  cpf,
  phoneNumber,
  age,
  password,
}) => {
  try {
    const user = await createUser({
      name,
      surname,
      email,
      cpf,
      phoneNumber,
      age,
      password,
    });

    return user;
  } catch (error) {
    throw new Error(HttpStatusCode.BadRequest, error.message);
  }
};
