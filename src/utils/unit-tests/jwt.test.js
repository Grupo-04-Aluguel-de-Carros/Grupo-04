/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';
import { generateAccessToken, generateToken } from '../jwt.js';

// Mocking the process.env.JWT_ACCESS_SECRET for testing purposes
process.env.JWT_ACCESS_SECRET = 'yourSecretKey';

const mockUser = { id: '123', username: 'testUser' };

describe('Token Generation Tests', () => {
  describe('generateAccessToken Function', () => {
    it('should generate a valid access token with the correct payload', () => {
      const accessToken = generateAccessToken(mockUser);
      const decodedToken = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_SECRET
      );

      expect(decodedToken.userId).toBe(mockUser.id);
      expect(decodedToken.exp).toBeDefined();
    });
  });

  describe('generateToken Function', () => {
    it('should generate a valid token object with an access token', () => {
      const tokenObject = generateToken(mockUser);

      expect(tokenObject.accessToken).toBeDefined();

      const decodedToken = jwt.verify(
        tokenObject.accessToken,
        process.env.JWT_ACCESS_SECRET
      );
      expect(decodedToken.userId).toBe(mockUser.id);
      expect(decodedToken.exp).toBeDefined();
    });
  });
});
