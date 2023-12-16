import { db } from '../src/config/db.js';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

export const mainBrand = async name => {
  try {
    const brand = await db.brand.upsert({
      where: { id: id },
      update: {},
      create: {
        name: name,
      },
    });
    return brand;
  } catch (error) {
    console.log({
      message: error.message,
      status: error.status,
    });
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
};
