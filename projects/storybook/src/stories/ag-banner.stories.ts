import { signal } from '@angular/core';
import { Meta, StoryObj } from '@storybook/angular';
//
// Storybook Modules
//
import { useArgs } from 'storybook/internal/preview-api';
//
// @angularis/component
//
import { AgBanner } from '@angularis/component';
//
// Meta
//
const meta: Meta<AgBanner> = {
  title: 'AgBanner',
  component: AgBanner,
  parameters: {
    docs: {
      description: {
        component: 'Your component description goes here...',
      },
    },
  },
  argTypes: {
    label: {  control: 'text' },
    hidden: { control: 'boolean' },
    disabled: { control: 'boolean' },
  }
};

export default meta;

//
// Story Type
//
type Story = StoryObj<AgBanner>;
//
// Stories
//
export const Basic: Story = {
  render: (args) => {
    const [updatedArgs, updateArgs] = useArgs();
    return {
      props: {
        label: signal(args.label),
        hidden: signal(args.hidden),
        disabled: signal(args.disabled),
      },
      template: `
        <ag-banner 
        [label]="label" 
        [hidden]="hidden" 
        [disabled]="disabled">
        <h1>Overview</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ag-banner>
      `,
    };
  }
};
