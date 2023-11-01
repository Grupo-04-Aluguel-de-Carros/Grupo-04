import { ZodError } from 'zod';

export const validate = schema => (req, res, next) => {
  console.log(req.body);
  try {
    schema.parse({
      params: req.params,
      query: req.query,
      body: req.body,
    });

    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        status: 'fail',
        errors: error.errors,
      });
    }
    next(error);
  }
};
