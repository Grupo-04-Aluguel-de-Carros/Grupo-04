import { db } from '../src/config/db.js';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();
console.log(id);

export const main = async name => {
  try {
    await db.brand.upsert({
      where: { id: id },
      update: {},
      create: {
        name: name,
      },
    });
  } catch (error) {
    await db.$disconnect();
    console.log('error ==>', error);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
};

main('Ferrari');
main('McLaren');
main('Lamborghini');
main('Bugatti');
main('Porsche');
main('Koenigsegg');
