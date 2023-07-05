import { Router } from 'express';

export abstract class BaseRouter {
  protected readonly router: Router = Router();

  getRouter(): Router {
    return this.router;
  }

  abstract initRoutes(): void;
}
