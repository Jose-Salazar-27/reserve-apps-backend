import { PrismaClient as Prisma } from "@prisma/client";
import { Configuration } from "../config/server-config";
import { DBConnector } from "../shared/adapters/db-connection-adapter";

// Singletoon pattern, to avoid multiple or unexpected connections
export class PrismaClient extends Configuration implements DBConnector {
  private client: Prisma;
  private instance?: PrismaClient;
  private constructor(client: Prisma) {
    super();
    this.client = client;
  }

  public async connect(): Promise<void> {
    await this.client.$connect();
  }

  public async disconnect(): Promise<void> {
    await this.client.$disconnect();
  }

  public useInstance(): PrismaClient {
    if (!this.instance) {
      this.instance = new PrismaClient(new Prisma());
      return this.instance;
    }

    return this.instance;
  }
}
