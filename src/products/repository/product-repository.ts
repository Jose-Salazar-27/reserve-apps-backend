import { Product, PrismaClient } from '@prisma/client';
import { IProductRepository } from './adapter';

export class ProductRepository implements IProductRepository {
  prisma: PrismaClient;

  constructor(private _prisma: PrismaClient) {
    this.prisma = _prisma;
  }

  async findProductById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }
  public async findAll(): Promise<Product[]> {
    const productList = await this.prisma.product.findMany();

    return productList;
  }
  findByCategory(category: string): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  searchByParams(name: string): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  filterByQuantity(min: number, max: number): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}
