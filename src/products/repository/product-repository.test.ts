// import { PrismaMock } from '../../__test__/mocks/database.mock';
import { ProductRepository as Repository } from './product-repository';
import { ProductMother } from '../../__test__/mothers/product.mother';
import {
  Context,
  MockContext,
  createMockContext,
} from '../../__test__/mocks/prisma-context.mock';
import { Product } from '@prisma/client';

let mockCtx: MockContext;
let ctx: Context;
let ProductRepository: Repository;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
  ProductRepository = new Repository(ctx.prisma);
});

describe('PRODUCT REPOSITORY TESTS \n', () => {
  test('should return a saved record', async () => {
    const mock_product = ProductMother.create();

    mockCtx.prisma.product.findUnique.mockResolvedValue(mock_product);

    const product = await ProductRepository.findProductById(mock_product.id);

    expect(product).toBeDefined();
    expect(product?.id).toEqual(mock_product.id);
  });

  test('it should return a list of products', async () => {
    const length = 5;
    const array_mocks = ProductMother.createProductList(length);

    mockCtx.prisma.product.findMany.mockResolvedValue(array_mocks);

    const productList = await ProductRepository.findAll();

    expect(productList).not.toBe(null);
    expect(productList).toHaveLength(length);
  });
});
