import { config } from 'dotenv';

config({ path: '.env.local' });

if (process.env.SEED_DATABASE_URL) {
  process.env.DATABASE_URL = process.env.SEED_DATABASE_URL;
}

if (!process.env.DATABASE_URL) {
  throw new Error('Missing DATABASE_URL. Set DATABASE_URL in .env.local or SEED_DATABASE_URL before running the seed script.');
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function isPrismaKnownRequestError(error: unknown): error is { code?: string; meta?: { table?: string } } {
  return typeof error === 'object' && error !== null && 'code' in error;
}

async function main() {
  const id = 'admin-user';
  const email = 'admin@project.com';

  const user = await prisma.user.upsert({
    where: { id },
    update: {
      email,
      role: 'ADMIN',
      isVerified: true,
      firstName: 'Admin',
      lastName: 'User',
      name: 'Admin User',
    },
    create: {
      id,
      email,
      role: 'ADMIN',
      isVerified: true,
      firstName: 'Admin',
      lastName: 'User',
      name: 'Admin User',
    },
  });

  console.log('Upserted user:', user.id, user.email, user.role);
}

main().catch((e) => {
  if (isPrismaKnownRequestError(e) && e.code === 'P2021') {
    const tableName = e.meta?.table || 'required Prisma tables';
    console.error(`Missing database table: ${tableName}`);
    console.error('The target database does not have the Prisma schema yet.');
    console.error('Run `npx prisma db push` in the frontend folder against this DATABASE_URL, then rerun `npm run seed:admin`.');
    process.exit(1);
  }

  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
