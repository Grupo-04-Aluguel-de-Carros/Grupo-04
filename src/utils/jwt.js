import jwt from 'jsonwebtoken';

export const generateAccessToken = user => {
  return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '24h',
  });
};

export const generateToken = user => {
  const accessToken = generateAccessToken(user);

  return { accessToken };
};
