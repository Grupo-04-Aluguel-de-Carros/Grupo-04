import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';
const prisma = new PrismaClient();
export async function main() {
  try {
    await prisma.user.upsert({
      where: { email: 'admin@admin.com' },
      update: {},
      create: {
        name: 'Admin',
        surname: 'admin',
        email: 'admin@admin.com',
        cpf: '62828426033',
        age: '18',
        phoneNumber: '11940028922',
        password: hashSync('12345678', 10),
        role: 'ADMIN',
      },
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
