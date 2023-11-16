import { object, string } from 'zod';
import { cepRegex, onlyNumbersRegex } from '../../../utils/index.js';

export const updateAddressSchema = object({
  body: object({
    cep: string()
      .trim()
      .regex(cepRegex, { message: 'Cep inválido' })
      .optional(),
    street: string()
      .trim()
      .min(2, { message: 'O campo "rua" precisa de ao menos 2 caracteres' })
      .optional(),
    city: string()
      .trim()
      .min(2, { message: 'O campo "cidade" precisa de ao menos 2 caracteres' })
      .optional(),
    state: string()
      .trim()
      .min(4, { message: 'O campo "estado" precisa de ao menos 4 caracteres' })
      .optional(),
    number: string()
      .trim()
      .min(1, { message: 'O campo "numero" precisa de ao menos 1 caracter' })
      .regex(onlyNumbersRegex, { message: 'Número inválido' })
      .optional(),
    neighborhood: string({ required_error: 'Campo obrigatório' })
      .trim()
      .min(2, { message: 'O campo "bairro" precisa de ao menos 2 caracteres' })
      .optional(),
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
  params: object({
    id: string(),
  }),
});
