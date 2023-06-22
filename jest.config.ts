import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  // detectLeaks: true,
  clearMocks: true,
  testEnvironment: 'node',
  preset: 'ts-jest',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
