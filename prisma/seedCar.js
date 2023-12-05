import { db } from '../src/config/db.js';
import { v4 as uuidv4 } from 'uuid';
import { mainStore } from './seedStore.js';
import { mainBrand } from './seedBrand.js';

const id = uuidv4();

export async function mainCar() {
  try {
    const storeDhRentalGramado = await mainStore('Dh Rental Gramado');
    const brandAudi = await mainBrand('AUDI');
    await db.car.upsert({
      where: { id: id },
      update: {},
      create: {
        name: 'AUDI TT',
        color: 'cinza',
        storeId: storeDhRentalGramado.id,
        brandId: brandAudi.id,
        available: true,
        model: 'TT',
        value: 1900.0,
        year: '2022',
        description: 'audi cinza',
      },
    });
    const brandMcLaren = await mainBrand('MC LAREN');
    await db.car.upsert({
      where: { id: id },
      update: {},
      create: {
        name: 'McLaren 750S',
        color: 'laranja',
        storeId: storeDhRentalGramado.id,
        brandId: brandMcLaren.id,
        available: true,
        model: '750S',
        value: 3000.0,
        year: '2023',
        description: 'mclaren cinza',
      },
    });
    const storeDhRentalSaoPaulo = await mainStore('Dh Rental São Paulo');
    const brandFerrari = await mainBrand('FERRARI');
    await db.car.upsert({
      where: { id: id },
      update: {},
      create: {
        name: '330 LM',
        color: 'vermelha',
        storeId: storeDhRentalSaoPaulo.id,
        brandId: brandFerrari.id,
        available: true,
        model: 'Premium',
        value: 2500,
        year: '2022',
        description: 'ferrari vermelha',
      },
    });
    const brandLamborghini = await mainBrand('LAMBORGHINI');
    await db.car.upsert({
      where: { id: id },
      update: {},
      create: {
        name: 'Lamborghini Aventador',
        color: 'cinza',
        storeId: storeDhRentalSaoPaulo.id,
        brandId: brandLamborghini.id,
        available: true,
        model: 'Performante',
        value: 3200,
        year: '2022',
        description: 'lamborghini cinza',
      },
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

mainCar();
