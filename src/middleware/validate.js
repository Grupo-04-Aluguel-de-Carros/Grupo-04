import { ZodError } from 'zod';

export const validate = schema => (req, res, next) => {
  try {
    const { body, params, query } = schema.parse({
      params: req.params,
      query: req.query,
      body: req.body,
    });
    req.body = body;
    req.params = params;
    req.query = query;
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
