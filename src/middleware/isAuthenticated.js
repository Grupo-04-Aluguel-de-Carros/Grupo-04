import { HttpStatusCode } from 'axios';
import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(HttpStatusCode.Unauthorized).json({ message: 'Não autorizado' });
  }

  try {
    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer') {
      res
        .status(HttpStatusCode.Unauthorized)
        .json({ message: 'Token mal formatado' });
    }

    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    req.payload = payload;
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res
        .status(HttpStatusCode.Unauthorized)
        .json({ Error: error.name });
    }
    return res
      .status(HttpStatusCode.Unauthorized)
      .json({ Error: 'Não autorizado' });
  }
  return next();
};
