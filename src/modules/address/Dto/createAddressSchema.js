import { object, string } from 'zod';
import { cepRegex, onlyNumbersRegex } from '../../../utils/index.js';

export const createAddressSchema = object({
  body: object({
    cep: string({ required_error: 'Campo obrigatório' }).regex(cepRegex, {
      message: 'Cep inválido',
    }),
    street: string({ required_error: 'Campo obrigatório' })
      .min(2, { message: 'Campo obrigatório' })
      .trim()
      .refine(value => value.trim().length > 0, {
        message: 'Campo obrigatório',
      }),
    city: string({ required_error: 'Campo obrigatório' })
      .min(2, { message: 'O campo "cidade" precisa de ao menos 2 caracteres' })
      .refine(value => value.trim().length > 0, {
        message: 'Campo obrigatório',
      }),
    state: string({ required_error: 'Campo obrigatório' })
      .min(4, { message: 'O campo "estado" precisa de ao menos 4 caracteres' })
      .refine(value => value.trim().length > 0, {
        message: 'Campo obrigatório',
      }),
    number: string({ required_error: 'Campo obrigatório' })
      .min(1, { message: 'O campo "numero" precisa de ao menos 1 caracter' })
      .regex(onlyNumbersRegex, { message: 'Número inválido' })
      .refine(value => value.trim().length > 0, {
        message: 'Campo obrigatório',
      }),
    neighborhood: string({ required_error: 'Campo obrigatório' })
      .min(2, { message: 'O campo "bairro" precisa de ao menos 2 caracteres' })
      .refine(value => value.trim().length > 0, {
        message: 'Campo obrigatório',
      }),
    complement: string()
      .trim()
      .refine(value => value.trim().length > 0, {
        message: 'O campo "complemento" não pode estar vazio',
      })
      .optional()
      .nullable(),
    storeId: string()
      .min(4, { message: 'O campo "storeId" precisa de ao menos 4 caracteres' })
      .refine(value => value.trim().length > 0, {
        message: 'O campo "storeId" não pode estar vazio',
      })
      .optional(),
    userId: string()
      .min(4, { message: 'O campo "userId" precisa de ao menos 4 caracteres' })
      .refine(value => value.trim().length > 0, {
        message: 'O campo "userId" não pode estar vazio',
      })
      .optional(),
  }),
});
