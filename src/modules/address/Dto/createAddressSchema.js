import { object, string } from 'zod';
import { cepRegex, onlyNumbersRegex } from '../../../utils/index.js';

export const createAddressSchema = object({
  body: object({
    cep: string({ required_error: 'Campo obrigatório' })
      .trim()
      .regex(cepRegex, { message: 'Cep inválido' }),
    street: string()
      .trim()
      .min(2, { message: 'O campo "rua" precisa de ao menos 2 caracteres' }),
    city: string()
      .trim()
      .min(2, { message: 'O campo "cidade" precisa de ao menos 2 caracteres' }),
    state: string()
      .trim()
      .min(4, { message: 'O campo "estado" precisa de ao menos 4 caracteres' }),
    number: string()
      .trim()
      .min(1)
      .regex(onlyNumbersRegex, { message: 'número inválido' }),
    neighborhood: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(2, { message: 'O campo "bairro" precisa de ao menos 2 caracteres' }),
    complement: string().trim().optional().nullable(),
    storeId: string()
      .trim()
      .min(4, { message: 'O campo "storeId" precisa de ao menos 4 caracteres' })
      .optional(),
    userId: string()
      .trim()
      .min(4, { message: 'O campo "userId" precisa de ao menos 4 caracteres' })
      .optional(),
  }),
});
