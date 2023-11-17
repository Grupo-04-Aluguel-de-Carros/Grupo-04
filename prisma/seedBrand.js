import { db } from '../src/config/db.js';
import { v4 as uuidv4 } from 'uuid';
import { findBrandByNameRepo } from '../src/modules/brand/Repository/findBrandByNameRepo.js';
import { HttpStatusCode } from 'axios';

const id = uuidv4();

export const main = async name => {
  try {
    const brandCreated = await findBrandByNameRepo(name);
    if (brandCreated) {
      throw {
        message: 'Marcas ja criadas no sistema, verifique seu banco de dados !',
        status: HttpStatusCode.BadRequest,
      };
    }
    await db.brand.upsert({
      where: { id: id },
      update: {},
      create: {
        name: name,
      },
    });
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

main('FERRARI');
main('MCLAREN');
main('LAMBORGHINI');
main('BUGATTI');
main('PORSCHE');
main('KOENIGSEGG');
