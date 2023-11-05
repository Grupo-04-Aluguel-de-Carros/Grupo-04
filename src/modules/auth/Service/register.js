import { createUser } from '../users/user.service.js';

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
    throw { message: error.message, status: error.status };
  }
};
