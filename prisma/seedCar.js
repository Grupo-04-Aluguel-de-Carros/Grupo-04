import { db } from '../src/config/db.js';
import { v4 as uuidv4 } from 'uuid';
import { mainStore } from './seedStore.js';

const id = uuidv4();

export async function main() {
  const test = await mainStore('Dh Rental');
  console.log(test);
  try {
    await db.car.upsert({
      where: { id: id },
      update: {},
      create: {
        name: 'Gol',
        color: 'azul',
        storeId: id,
        brandId: id,
        available: true,
        model: 'ferrari',
        value: 1900.0,
        year: '2022',
        description: 'ferrari bonita',
      },
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

main();
