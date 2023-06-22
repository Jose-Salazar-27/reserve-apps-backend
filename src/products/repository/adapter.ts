import { Product } from "@prisma/client";

export interface IProductRepository {
  findProductById(id: number): Promise<Product | null>;
  findAll(id: string): Promise<Product[] | null>;
  findByCategory(category: string): Promise<Product[] | null>;
  searchByParams(name: string): Promise<Product[] | null>;
  filterByQuantity(min: number, max: number): Promise<Product[] | null>;
}
