module.exports = {
  preset: 'ts-jest',
  // transform: {
  //   '^.+\\.tsx?$': [
  //     'babel-jest',
  //     { presets: ['@babel/preset-env', '@babel/preset-typescript'] },
  //   ],
  // },
  //testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.lib.spec.json' }],
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: false,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/lib/$1',
    '^app/(.*)$': '<rootDir>/src/lib/app/$1',
    '^assets/(.*)$': '<rootDir>/src/lib/assets/$1',
    '^environments/(.*)$': '<rootDir>/src/lib/environments/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
