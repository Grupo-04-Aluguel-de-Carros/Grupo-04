import { HttpStatusCode } from 'axios';
import { findUserByEmailRepo } from '../Repository/index.js';
import { compare } from 'bcrypt';

export const comparePassword = async ({ email, password }) => {
  try {
    const existsUser = await findUserByEmailRepo(email);

    if (!existsUser) {
      throw {
        message:
          'Usuário ou senha incorreta, verifique os dados e tente novamente.',
        status: HttpStatusCode.Unauthorized,
      };
    }

    const validPassword = await compare(password, existsUser.password);

    if (!validPassword) {
      throw {
        message:
          'Usuário ou senha incorreta, verifique os dados e tente novamente.',
        status: HttpStatusCode.Unauthorized,
      };
    }

    return existsUser;
  } catch (error) {
    throw {
      message:
        'Usuário ou senha incorreta, verifique os dados e tente novamente.',
      status: HttpStatusCode.Unauthorized,
    };
  }
};
