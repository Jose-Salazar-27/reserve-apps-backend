import { Request, Response } from "express";

export interface BaseController {
  list(req: Request, res: Response): Promise<void>;
  findById(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
}
