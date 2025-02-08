module.exports = {
  preset: 'ts-jest',
  //testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.lib.spec.json' }],
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  passWithNoTests: true,
  collectCoverage: false,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/lib/$1',
    '^app/(.*)$': '<rootDir>/src/lib/app/$1',
    '^assets/(.*)$': '<rootDir>/src/lib/assets/$1',
    '^environments/(.*)$': '<rootDir>/src/lib/environments/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
