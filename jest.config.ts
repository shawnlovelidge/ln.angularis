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
    '^.+\\.ts?$': [
      'ts-jest',
      { tsconfig: 'projects/core/tsconfig.lib.spec.json' },
    ],
  },
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
};
