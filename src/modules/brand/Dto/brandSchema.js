import { object, string } from 'zod';

export const brandSchema = object({
  body: object({
    name: string({
      required_error: 'Nome da marca é obrigatório',
    })
      .trim()
      .min(3, 'O nome deve ter mais de 3 caracteres'),
  }),
});

export const validateReqSchema = (name, req) => {
  const reqBodyModel = { name: name };
  if (reqBodyModel == req) {
    console.log('validado');
  } else {
    console.log('errado');
  }
};
