import { db } from '../src/config/db.js';
import { v4 as uuidv4 } from 'uuid';
import { mainCar } from './seedCar.js';

const id = uuidv4();

export const seedAddress = async () => {
  try {
    const storeIdAddress = await mainCar();
    await db.address.upsert({
      where: {
        id,
      },
      update: {},
      create: {
        cep: '86604-496',
        street: 'Rua Tulipas',
        city: 'São Paulo',
        state: 'São Paulo',
        number: '856',
        neighborhood: 'Jardim Novo Horizonte',
        complement: 'Parede azul',
        storeId: storeIdAddress.storeId,
      },
    });
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

seedAddress();
