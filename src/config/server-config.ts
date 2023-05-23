import * as dotenv from 'dotenv';

export abstract class Configuration {
  constructor() {
    dotenv.config();
  }

  protected getEnviroment(v: string): string {
    const variable = process.env[v];
    if (variable === undefined) {
      throw new Error(`process.env.${v} is undefined`);
    }

    return variable;
  }
}
