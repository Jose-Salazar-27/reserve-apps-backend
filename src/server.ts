import express, { Application } from "express";
import cors from "cors";
import { Server as HttpType } from "http";
import { Configuration } from "./config/server-config";
import { PrismaClient } from "./prisma/client";

export class Server extends Configuration {
  private app: Application;
  private server?: HttpType;
  constructor() {
    super();
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  public async start(): Promise<void> {
    if (!this.server) {
      this.server = this.app.listen(super.getPort(), () => {
        console.log(`Server is running on port ${super.getPort()} `);
      });

      await PrismaClient.useInstance()
        .connect()
        .then(() => {
          console.log("DB connection was succesfulled");
        })
        .catch((err) => {
          console.log("ERROR CONNECTING WITH THE DB", err);
        });
    }
  }
}
