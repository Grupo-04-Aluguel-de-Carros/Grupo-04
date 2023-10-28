import { HttpStatusCode } from 'axios';
import { findUserByEmailRepo } from '../Repository/index.js';
import { compare } from 'bcrypt';

export const comparePassword = async ({ email, password }) => {
  try {
    const existsUser = await findUserByEmailRepo(email);

    if (!existsUser) {
      throw new Error(
        'Usuário ou senha incorreta, verifique os dados e tente novamente.',
        HttpStatusCode.Unauthorized
      );
    }

    const validPassword = await compare(password, existsUser.password);

    if (!validPassword) {
      throw new Error(
        HttpStatusCode.Unauthorized,
        'Usuário ou senha incorreta, verifique os dados e tente novamente.'
      );
    }

    return existsUser;
  } catch (error) {
    throw new Error(
      'Usuário ou senha incorreta, verifique os dados e tente novamente.',
      HttpStatusCode.Unauthorized
    );
  }
};
