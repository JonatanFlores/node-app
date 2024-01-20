# NodeJS Boilerplate

A comprehensive set of configurations and tools to kickstart your NodeJS backend development. This project provides essential setups including Jest, Prettier, ESLint, TypeScript, and more. Use this boilerplate to accelerate the development of robust and maintainable NodeJS applications.

## Features

- **Jest**: Powerful testing framework for unit and integration testing.
- **Prettier**: Opinionated code formatter to maintain consistent code style.
- **ESLint**: Pluggable linting utility for identifying and fixing problems in your code.
- **TypeScript**: Type-check your JavaScript code and enjoy improved developer experience.
- **Husky**: Git hooks made easy to ensure code quality before commits.
- **npm-check**: Check for outdated, incorrect, and unused dependencies.
- **ts-node-dev**: Improved development experience with fast TypeScript execution.
- **tsc-alias**: TypeScript alias paths for cleaner import statements.
- **tsconfig-paths**: TypeScript path resolution for aliases.
- **Pino-Pretty**: Pretty print for Pino logs for enhanced readability.

## Prerequisites

- Node.js (>=18.0.0)

## Installation

Clone this repository and run the following command to install the dependencies:

```bash
npm install
```

## Scripts

- **Build**: Compile TypeScript code using TSC and TSC-Alias.

  ```bash
  npm run build
  ```

- **Check Dependencies**: Check for outdated dependencies.

  ```bash
  npm run check
  ```

- **Clean**: Remove the build directory.

  ```bash
  npm run clean
  ```

- **Development**: Run the application in development mode with automatic restart.

  ```bash
  npm run dev
  ```

- **Lint**: Run ESLint for code linting.

  ```bash
  npm run lint
  ```

- **Lint & Fix**: Run ESLint and automatically fix issues.

  ```bash
  npm run lint:fix
  ```

- **Test**: Run Jest tests.

  ```bash
  npm test
  ```

- **Test with Coverage**: Run Jest tests with coverage report.

  ```bash
  npm run test:coverage
  ```

- **Coveralls**: Send coverage report to Coveralls.

  ```bash
  npm run test:coveralls
  ```

- **Integration Test**: Run Jest tests with integration test configuration.

  ```bash
  npm run test:integration
  ```

- **Staged Test**: Run Jest tests for staged files.

  ```bash
  npm run test:staged
  ```

- **Watch Test**: Watch for changes and run Jest tests.
  ```bash
  npm run test:watch
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
