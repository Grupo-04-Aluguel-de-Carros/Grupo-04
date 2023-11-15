import { object, string } from 'zod';
import {
  emailRegex,
  onlyLettersRegex,
  onlyNumbersRegex,
  phoneRegex,
} from '../../../utils/regex.js';

export const registerUserSchema = object({
  body: object({
    name: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(3, { message: 'O nome deve ter ao menos 2 digitos' })
      .regex(onlyLettersRegex, { message: 'Apenas letras são aceitas' }),
    surname: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(3, { message: 'O sobrenome deve ter ao menos 2 digitos' })
      .regex(onlyLettersRegex, { message: 'Apenas letras são aceitas' }),
    email: string({ required_error: 'Campo obrigatório' })
      .trim()
      .regex(emailRegex, { message: 'Email inválido' })
      .email(),
    cpf: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(11, { message: 'Cpf inválido' }),
    phoneNumber: string({ required_error: 'Campo obrigatório' })
      .trim()
      .regex(phoneRegex, { message: 'Telefone inválido' }),
    age: string({ required_error: 'Campo obrigatório' })
      .trim()
      .regex(onlyNumbersRegex, { message: 'Apenas números são aceitos' }),
    password: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(6, { message: 'A senha deve ter ao menos 6 digitos' }),
  }),
});
