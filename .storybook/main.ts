import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../projects/storybook/src/**/*.mdx',
    '../projects/storybook/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],

  framework: {
    name: '@storybook/angular',
    options: {},
  },

  docs: {},
};
export default config;
