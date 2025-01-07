import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { workspaceRoot } from '@nrwl/devkit';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

//
// https://vite.dev/config/
//
export default defineConfig({
  plugins: [
    tsconfigPaths({ loose: true }),
    angular({
      workspaceRoot,
      inlineStylesExtension: 'scss',
      includePaths: [path.resolve(workspaceRoot, 'src/styles')], // Add your desired include paths here
    }),
  ],
  resolve: {
    //mainFields: ['module'],
    alias: {
      '@app': './src/app',
      '@component': './src/app/component',
      '@model': './src/model',
      '@store': './src/store',
    },
  },
  server: {
    port: 4200,
  },
});