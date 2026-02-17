// import "dotenv/config";
// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '@prisma/client'

// const connectionString = `${process.env.DATABASE_URL}`

// const adapter = new PrismaPg({ connectionString })
// const prisma = new PrismaClient({ adapter })

// export { prisma }



import "dotenv/config";
import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const { PrismaClient } = pkg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

export { prisma };
