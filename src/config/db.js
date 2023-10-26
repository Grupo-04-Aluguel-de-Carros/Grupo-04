const { PrismaClient } = require('@prisma/client/edge');

export const db = new PrismaClient();
