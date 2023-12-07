import { db } from '../src/config/db.js';
import { v4 as uuidv4 } from 'uuid';
import { mainStore } from './seedStore.js';
import { mainBrand } from './seedBrand.js';

const id = uuidv4();

export async function main() {
  try {
    const store = await mainStore('Dh Rental');
    const brand = await mainBrand('AUDI');
    await db.car.upsert({
      where: { id: id },
      update: {},
      create: {
        name: 'AUDI TT',
        color: 'cinza',
        storeId: store.id,
        brandId: brand.id,
        available: true,
        model: 'TT',
        value: 1900.0,
        year: '2022',
        description: 'audi cinza',
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
