import { coerce, object } from 'zod';

export const createBookingSchema = object({
  body: object({
    inicialDate: coerce
      .date({
        required_error: 'Por favor insira uma data válida do tipo americano',
      })
      .min(new Date(new Date()), {
        message: 'Insira uma data maior que a de hoje',
      }),
  }),
});
