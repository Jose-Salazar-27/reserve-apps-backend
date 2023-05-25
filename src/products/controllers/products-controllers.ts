import { Request, Response } from "express";
import { Configuration } from "../../config/server-config";
import { BaseController } from "../../shared/controllers/base-controller";

class ProductsController extends Configuration implements BaseController {
  private service: any;
  constructor() {
    super();
  }

  async findById(): Promise<void> {}
  async delete(): Promise<void> {}
  async update(): Promise<void> {}
  async list(): Promise<void> {}
}

export { ProductsController };
