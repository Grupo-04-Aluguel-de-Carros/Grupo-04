import { object, string } from 'zod';
import {
  emailRegex,
  onlyLettersRegex,
  onlyNumbersRegex,
  phoneRegex,
} from '../../../utils/index.js';

export const updateUserSchema = object({
  body: object({
    name: string()
      .trim()
      .min(3, { message: 'O nome deve ter ao menos 3 digitos' })
      .regex(onlyLettersRegex, { message: 'Apenas letras são aceitas' })
      .optional(),
    surname: string()
      .trim()
      .min(3, { message: 'O sobrenome deve ter ao menos 2 digitos' })
      .regex(onlyLettersRegex, { message: 'Apenas letras são aceitas' })
      .optional(),
    email: string()
      .trim()
      .regex(emailRegex, { message: 'Email inválido' })
      .email(),
    cpf: string().trim().optional(),
    phoneNumber: string()
      .trim()
      .regex(phoneRegex, { message: 'Telefone inválido' })
      .optional(),
    age: string()
      .trim()
      .regex(onlyNumbersRegex, { message: 'Apenas números são aceitos' })
      .optional(),
    password: string()
      .trim()
      .min(6, { message: 'A senha deve ter ao menos 6 digitos' })
      .optional(),
  }),
});
