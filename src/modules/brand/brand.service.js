// import { db } from '../../config/db.js';
const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();
export const createBrand = async ({ name, car }) => {
  try {
    const brand = await db({});
  } catch (error) {}
};
