import { HttpStatusCode } from 'axios';
import { hashSync } from 'bcrypt';
import {
  createUserRepo,
  findUserByCpfRepo,
  findUserByEmailRepo,
} from '../Repository/index.js';
import { removeSpecialCharacters, validateCPF } from '../../../utils/index.js';

export const createUser = async (
  name,
  surname,
  email,
  cpf,
  phoneNumber,
  age,
  password
) => {
  try {
    password = hashSync(password, 12);
    cpf = removeSpecialCharacters(cpf);

    if (!validateCPF(cpf)) {
      throw {
        message: 'CPF inválido.',
        status: HttpStatusCode.BadRequest,
      };
    }

    const cpfExists = await findUserByCpfRepo(cpf);
    if (cpfExists) {
      throw {
        message: 'CPF já cadastrado.',
        status: HttpStatusCode.BadRequest,
      };
    }

    const emailExists = await findUserByEmailRepo(email);

    if (emailExists) {
      throw {
        message: 'Email já cadastrado.',
        status: HttpStatusCode.BadRequest,
      };
    }

    if (Number(age) < 18) {
      throw {
        message: 'Aplicação proibida para menores de 18 anos.',
        status: HttpStatusCode.BadRequest,
      };
    }

    phoneNumber = removeSpecialCharacters(phoneNumber);
    return await createUserRepo(
      name,
      surname,
      email,
      cpf,
      phoneNumber,
      age,
      password
    );
  } catch (error) {
    throw new Error(error.message, HttpStatusCode.BadRequest);
  }
};
