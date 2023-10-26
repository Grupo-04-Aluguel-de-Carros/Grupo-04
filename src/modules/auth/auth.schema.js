import { object, string } from 'zod';
import {
  emailRegex,
  onlyLettersRegex,
  onlyNumbersRegex,
  phoneRegex,
} from '../../utils/regex.js';

export const registerUserSchema = object({
  body: object({
    name: string()
      .trim()
      .min(3, { message: 'O nome deve ter ao menos 2 digitos' })
      .regex(onlyLettersRegex, { message: 'Apenas letras são aceitas' }),
    surname: string()
      .trim()
      .min(3, { message: 'O sobrenome deve ter ao menos 2 digitos' })
      .regex(onlyLettersRegex, { message: 'Apenas letras são aceitas' }),
    email: string()
      .trim()
      .regex(emailRegex, { message: 'Email inválido' })
      .email(),
    cpf: string().trim(),
    phoneNumber: string()
      .trim()
      .regex(phoneRegex, { message: 'Telefone inválido' }),
    age: string()
      .trim()
      .regex(onlyNumbersRegex, { message: 'Apenas números são aceitos' }),
    password: string()
      .trim()
      .min(6, { message: 'A senha deve ter ao menos 6 digitos' }),
  }),
});
