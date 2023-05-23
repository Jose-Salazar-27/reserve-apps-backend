import express, { Application } from 'express';
import cors from 'cors';
import { Configuration } from './config/server-config';

export class Server extends Configuration {
  private app: Application;
  constructor() {
    super();
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }
}
