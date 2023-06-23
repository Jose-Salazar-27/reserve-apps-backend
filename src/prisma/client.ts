import { PrismaClient } from "@prisma/client";

// Singletoon pattern, to avoid multiple or unexpected connections
export const prisma = new PrismaClient();
