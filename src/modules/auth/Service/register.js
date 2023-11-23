import { generateToken } from '../../../utils/jwt.js';
import { createUser } from '../../users/Service/createUser.js';

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

    const result = generateToken(user);

    return { user: user, token: result };
  } catch (error) {
    throw { message: error.message, status: error.status };
  }
};
