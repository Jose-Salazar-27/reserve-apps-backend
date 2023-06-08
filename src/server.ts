import express, { Application } from 'express';
import cors from 'cors';
import { Server as HttpType } from 'http';
import { ConfigService } from './config/server-config';
import { prisma } from './prisma/client';
import { ErrorHandler } from './shared/exceptions/error-handler';

export class Server extends ConfigService {
  private app: Application;
  private server?: HttpType;
  constructor() {
    super();
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());

    this.app.use(ErrorHandler);
  }

  public async start(): Promise<void> {
    if (!this.server) {
      this.server = this.app.listen(super.getPort(), () => {
        console.log(`Server is running on port ${super.getPort()} `);
      });

      await prisma
        .$connect()
        .then(() => {
          console.log('DB connection was succesfulled');
        })
        .catch((err) => {
          console.log('ERROR CONNECTING WITH THE DB', err);
        });
    }
  }
}
