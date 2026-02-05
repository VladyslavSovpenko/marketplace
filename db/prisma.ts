import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient, Prisma } from '../prisma/generated/client/client';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        needs: { price: true },
        compute(product: { price: Prisma.Decimal }) {
          return product.price.toString();
        },
      },
      rating: {
        needs: { rating: true },
        compute(product: { rating: Prisma.Decimal }) {
          return product.rating.toString();
        },
      },
    },
  },
});