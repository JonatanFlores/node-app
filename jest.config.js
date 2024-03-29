module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/index.ts', '!<rootDir>/src/**/*.d.ts', '!<rootDir>/src/main/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  transform: {
    '\\.ts$': 'ts-jest'
  }
};
