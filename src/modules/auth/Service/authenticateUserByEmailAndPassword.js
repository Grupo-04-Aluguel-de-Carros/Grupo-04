import { HttpStatusCode } from 'axios';
import { generateToken } from '../../../utils/index.js';
import { comparePassword } from '../../users/Service/index.js';

export const authenticatedUserByEmailAndPassword = async ({
  email,
  password,
}) => {
  try {
    const getUser = await comparePassword({ email, password });

    const result = generateToken(getUser);

    return result;
  } catch (error) {
    throw new Error(
      'Usuário ou senha incorreta, verifique os dados e tente novamente.',
      HttpStatusCode.Unauthorized
    );
  }
};
