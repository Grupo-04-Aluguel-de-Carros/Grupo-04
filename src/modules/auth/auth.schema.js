import { object, string } from 'zod';

export const registerUserSchema = object({
  body: object({
    email: string({
      required_error: 'email is required',
    }).email(),
    name: string({
      required_error: 'name is required',
    }),
    password: string({
      required_error: 'password is required',
    }).min(6, 'must be at least 6 character'),
  }),
});
