import { object, string } from 'zod';
import { cepRegex, onlyNumbersRegex } from '../../../utils/index.js';

export const createAddressSchema = object({
  body: object({
    cep: string({ required_error: 'Campo obrigatório' }).regex(cepRegex, {
      message: 'Cep inválido',
    }),
    street: string().refine(value => value.trim().length > 0, {
      message: 'O campo "rua" não pode estar vazio',
    }),
    city: string()
      .min(2, { message: 'O campo "cidade" precisa de ao menos 2 caracteres' })
      .refine(value => value.trim().length > 0, {
        message: 'O campo "cidade" não pode estar vazio',
      }),
    state: string()
      .min(4, { message: 'O campo "estado" precisa de ao menos 4 caracteres' })
      .refine(value => value.trim().length > 0, {
        message: 'O campo "estado" não pode estar vazio',
      }),
    number: string()
      .min(1, { message: 'O campo "number" precisa de ao menos 1 caractere' })
      .regex(onlyNumbersRegex, { message: 'Número inválido' })
      .refine(value => value.trim().length > 0, {
        message: 'O campo "number" não pode estar vazio',
      }),
    neighborhood: string({ required_error: 'Campo obrigatório' })
      .min(2, { message: 'O campo "bairro" precisa de ao menos 2 caracteres' })
      .refine(value => value.trim().length > 0, {
        message: 'O campo "bairro" não pode estar vazio',
      }),
    complement: string()
      .trim()
      .min(1, {
        message: 'O campo "complemento" precisa de ao menos 1 caractere',
      })
      .refine(value => value.trim().length > 0, {
        message: 'O campo "complemento" não pode estar vazio',
      })
      .nullable()
      .optional(),
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
