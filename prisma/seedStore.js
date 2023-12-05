import { db } from '../src/config/db.js';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

export const mainStore = async name => {
  try {
    const storeObject = await db.store.upsert({
      where: { id: id },
      update: {},
      create: {
        name: name,
      },
    });
    return storeObject;
  } catch (error) {
    await db.$disconnect();
    console.log({
      message: error.message,
      status: error.status,
    });
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
};

const dhRentalGramado = mainStore('Dh Rental Gramado');

export default { dhRentalGramado };
