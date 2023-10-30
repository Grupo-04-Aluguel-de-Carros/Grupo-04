import { object, string } from 'zod';
import { emailRegex } from '../../../utils';

export const loginSchema = object({
  body: object({
    email: string()
      .trim()
      .regex(emailRegex, { message: 'Email inválido' })
      .email(),
    password: string()
      .trim()
      .min(6, { message: 'A senha deve ter ao menos 6 digitos' }),
  }),
});
