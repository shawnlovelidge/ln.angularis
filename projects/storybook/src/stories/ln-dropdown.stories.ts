import { CommonModule } from '@angular/common';
//
// Storybook Modules
//
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { fn } from '@storybook/test';
import { useArgs } from 'storybook/internal/preview-api';

//
// LnDropDown
//
import { LnDropDown } from '../app/component/ln-dropdown/ln-dropdown';
import { LnIcon } from '../app/component/ln-icon/ln-icon';


//
// Meta
//
const meta: Meta<LnDropDown> = {
  title: 'LnDropDown',
  component: LnDropDown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Your component description goes here...',
      },
    },
  },
  args: {
    label: 'Items',
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
      imports: [CommonModule, LnIcon],
      declarations: [],
    }),
  ],
};

export default meta;

//
// Story Type
//
type Story = StoryObj<LnDropDown>;

//
// Stories
//
export const DefaultDropDown: Story = {
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
        <ln-dropdown
          [darkTheme]="darkTheme"
          [label]="label"
          [type]="type"
          [textField]="textField"
          [valueField]="valueField"
          [placeholder]="placeholder"
          [hidden]="hidden"
          [disabled]="disabled"
          [value]="value"
          [items]="items"
          (onValueChange)="handleValueChange($event)"
        ></ln-dropdown>`,
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
