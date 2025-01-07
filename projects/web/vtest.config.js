import { defineWorkspace } from '@vtest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

export default defineWorkspace([
  'vitest.config.mjs',
  {
    Plugins: [
      storybookTest({
        storybookScript: 'npm storybook --ci',
      }),
    ],
    test: {
      name: 'Storybook',
      include: ['src/**/*.stories.?(m)[jt]s?(x)'],
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
        headless: true,
      },
      isolate: false,
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  },
]);
