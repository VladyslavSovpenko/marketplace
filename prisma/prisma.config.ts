import path from 'node:path'
import type { PrismaConfig} from '@prisma/client'

export default {
    earlyAccess: true,
    schema: path.join(__dirname, 'prisma', 'schema.prisma'),

    migrate: {
        async development() {
            return {
                url: process.env.DATABASE_URL!
            }
        }
    }
} satisfies PrismaConfig