import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
//
// LnDropDown
//
import { LnDropDown } from '../app/component/ln-dropdown/ln-dropdown';
import { LnIcon } from '../app/component/ln-icon/ln-icon';
import { useArgs } from 'storybook/internal/preview-api';

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
    darkTheme: false,
    type: 'dark',
    textField: 'name',
    valueField: 'id',
    placeholder: 'Select...',
    hidden: false,
    disabled: false,
    value: 2,
    items: new Observable<any[]>((observer: any) => {
      const data: any[] = [
        { id: 1, name: 'Item 1', active: false },
        { id: 2, name: 'Item 2', active: false },
        { id: 3, name: 'Item 3', active: false },
      ];
      observer.next(data);
      observer.complete();
    }),
    onValueChange: fn((item) => {
      debugger;
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
    type: string;
    textField: string;
    valueField: string;
    placeholder: string;
    hidden: boolean;
    disabled: boolean;
    items: Observable<any[]>;
    onValueChange: any;
  }) => {
    const [updatedArgs, updateArgs] = useArgs();

    const handleValueChange = ($event: any) => {
      const { id } = $event;

      let items = new Observable<any[]>((observer: any) => {
        
        const data: any[] = [
          { id: 1, name: 'Item 1', active: false },
          { id: 2, name: 'Item 2', active: false },
          { id: 3, name: 'Item 3', active: false },
        ];

        data.forEach((item) => {
            item.active = (item.id === id);
        });

        observer.next(data);
        observer.complete();
      });

      updateArgs({
        value: $event['id'],
        items,
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
  play: async ({ args, canvasElement, step }) => {
    await step('Initial state', () => {
      // Assert the initial state
      console.log('Initial state');
    });

    await step('Update name', () => {
      console.log('Update state');
    });

    await step('Check updated name', () => {
      console.log('Check Update state');
    });
  },
};
