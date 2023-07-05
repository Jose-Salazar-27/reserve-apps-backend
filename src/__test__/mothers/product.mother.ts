import { Product } from '@prisma/client';
import { faker } from '@faker-js/faker';

export class ProductMother {
  static create({
    id = 123,
    name = 'test product',
    orderId = 321,
    price = 20,
    quantity = 5,
  } = {}): Product {
    return {
      id,
      name,
      orderId,
      price,
      quantity,
    };
  }

  static createControlledProduct({
    id = 1,
    name = 'valid test product',
    orderId = 321,
    price = 200,
    quantity = 50,
  } = {}): Product {
    return {
      id,
      name,
      orderId,
      price,
      quantity,
    };
  }

  static createProductList(length: number): Product[] {
    let products: Product[] = [];
    for (let i = 0; i < length; i++) {
      products.push(this.createRandomProduct());
    }

    return products;
  }

  private static createRandomProduct(): Product {
    return {
      id: faker.number.int({ min: 1, max: 10 }),
      name: faker.commerce.product(),
      orderId: faker.number.int({ min: 100, max: 999 }),
      price: Number(faker.commerce.price({ min: 15, max: 200 })),
      quantity: faker.number.int({ min: 1, max: 50 }),
    };
  }
}
