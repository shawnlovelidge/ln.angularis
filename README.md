# @angularis suite of libraries
## Overview

The `@angularis` Angular library is a comprehensive suite of modules designed to enhance and streamline Angular development. The library consists of the following packages:

- `@angularis/core`: Core functionalities and utilities.
- `@angularis/pipe`: Custom pipes for data transformation.
- `@angularis/directive`: Custom directives to extend HTML capabilities.
- `@angularis/model`: Data models and interfaces.
- `@angularis/service`: Services for business logic and data management.
- `@angularis/component`: Standalone components for building UI elements.

All libraries are fully compatible with Angular 19. The `@angularis/component` package provides standalone components by default, making it easier to integrate and use them in your Angular applications.

## Build
To build the entire `@angularis` suite, you can use npm scripts defined in the `package.json` file. Here is an example of how you can set up the build process:

1. **Install Dependencies**: Ensure all dependencies are installed by running:
  ```sh
  npm install
  ```

2. **Build Scripts**: Add the following scripts to your `package.json` file:
  ```json
  "scripts": {
    "build:core": "ng build @angularis/core",
    "build:pipe": "ng build @angularis/pipe",
    "build:directive": "ng build @angularis/directive",
    "build:model": "ng build @angularis/model",
    "build:service": "ng build @angularis/service",
    "build:component": "ng build @angularis/component",
    "build": "npm run build:core && npm run build:pipe && npm run build:directive && npm run build:model && npm run build:service && npm run build:component"
  }
  ```

3. **Run Build**: Execute the build process for all packages by running:
  ```sh
  npm run build
  ```

This setup ensures that each package in the `@angularis` suite is built in sequence, allowing you to manage and compile your Angular libraries efficiently.

## Changesets

To keep track of versioning for each library within the `@angularis` suite, we adhere to changesets. This approach ensures that version numbers convey meaning about the underlying changes, making it easier to manage dependencies and maintain compatibility. Each release is versioned in the format `MAJOR.MINOR.PATCH`, where increments in the major version indicate breaking changes, minor version increments signify new features that are backward-compatible, and patch version increments represent backward-compatible bug fixes.

### Changeset Usage
