import { CommonModule } from '@angular/common';
//
// Storybook Modules
//
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { fn } from '@storybook/test';
import { useArgs } from 'storybook/internal/preview-api';
//
//
//
import { toArgs } from './storybook.helper';
//
// @angularis/component
//
import { AngDropDown, AngIcon } from '@angularis/component';

//
// Meta
//
const meta: Meta<AngDropDown> = {
  title: 'AngDropDown',
  component: AngDropDown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Your component description goes here...',
      },
    },
  },
  args: {
    label: 'Label',
    darkTheme: true,
    small: true,
    textField: 'name',
    valueField: 'id',
    placeholder: 'Select...',
    hidden: false,
    disabled: false,
    value: 2,
    items: [
      { id: 1, name: 'Item 1', active: false },
      { id: 2, name: 'Item 2', active: false },
      { id: 3, name: 'Item 3', active: false },
    ],
    onValueChange: fn((item: any) => {
      console.log(item);
    }),
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, AngIcon], 
      declarations: [],
    }),
  ],
};

export default meta;

//
// Story Type
//
type Story = StoryObj<AngDropDown>;

//
// Stories
//
export const Simple: Story = {
  args: {},
  render: (props: {
    label: string;
    darkTheme: boolean;
    small: boolean;
    textField: string;
    valueField: string;
    placeholder: string;
    hidden: boolean;
    disabled: boolean;
    items: any[];
    onValueChange: any;
  }) => {
    const [updatedArgs, updateArgs] = useArgs();

    const handleValueChange = ($event: any) => {
      const { id } = $event;

      const data: any[] = [
        { id: 1, name: 'Item 1', active: false },
        { id: 2, name: 'Item 2', active: false },
        { id: 3, name: 'Item 3', active: false },
      ];

      data.forEach((item) => {
        item.active = item.id === id;
      });

      updateArgs({
        value: $event['id'],
        data,
      });
    };

    return {
      props: { ...props, handleValueChange, ...updatedArgs },
      template: `
        <ang-dropdown
          [darkTheme]="darkTheme"
          [label]="label"
          [textField]="textField"
          [valueField]="valueField"
          [placeholder]="placeholder"
          [hidden]="hidden"
          [disabled]="disabled"
          [value]="value"
          [items]="items"
          (onValueChange)="handleValueChange($event)"
        ></ang-dropdown>`,
    };
  },
  // play: async ({ args, canvasElement, step }) => {
  //   await step('Initial state', () => {
  //     // Assert the initial state
  //     console.log('Initial state');
  //   });

  //   await step('Update name', () => {
  //     console.log('Update state');
  //   });

  //   await step('Check updated name', () => {
  //     console.log('Check Update state');
  //   });
  // },
};
