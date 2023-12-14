import { generateToken } from '../../../utils/index.js';
import { findUserByCpfRepo } from '../../users/Repository/findUserByCpfRepo.js';
import { comparePassword } from '../../users/Service/index.js';

export const authenticatedUserByEmailAndPassword = async ({
  email,
  password,
}) => {
  try {
    const getUser = await comparePassword({ email, password });

    const getUserData = await findUserByCpfRepo(getUser.cpf);

    const result = generateToken(getUser);

    return { token: result, user: getUserData };
  } catch (error) {
    throw {
      message: error.message,
      status: error.status,
    };
  }
};
