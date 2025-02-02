import { Library } from '../library';
import { Base } from '../common';

export class CellComponent extends Base {
  public align: string;
  public checkAllFieldValue: string;
  public dataTextField: string;
  public dataValueField: string | number;
  public default: boolean;
  public hover: boolean;
  public indeterminate: boolean;
  public indicatorIcon: string;
  public items: any[];
  public maxLength: number;
  public minLength: number;
  public multiple: boolean;
  public pattern: string;
  public placeholder: string;
  public rows: number;
  public cols: number;
  public style: Partial<CSSStyleDeclaration> = {};
  public tooltip: number;
  public value: string | number;
  public visibility: boolean;

  public onValueChange: any;

  public hasItems() {
    return Library.isArrayWithLength(this.items);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<CellComponent>) {
    super(options);
    this.align = Library.init(options, 'align', 'left');
    this.checkAllFieldValue = Library.init(
      options,
      'checkAllFieldValue',
      'All'
    );
    this.cols = Library.init(options, 'cols', 10);
    this.dataTextField = Library.init(
      options,
      'dataTextField',
      'name'
    );
    this.dataValueField = Library.init(
      options,
      'dataValueField',
      'id'
    );
    this.default = Library.init(options, 'default');
    this.disabled = Library.init(options, 'disabled', false);
    this.hidden = Library.init(options, 'hidden', false);
    this.hover = Library.init(options, 'hover', false);
    this.indeterminate = Library.init(
      options,
      'indeterminate',
      false
    );
    this.indicatorIcon = Library.init(
      options,
      'indicatorIcon',
      'checkmark'
    );
    this.items = Library.init(options, 'items', []);
    this.label = Library.init(options, 'label', '');
    this.maxLength = Library.init(options, 'maxLength', 255);
    this.minLength = Library.init(options, 'minLength', 10);
    this.multiple = Library.init(options, 'multiple', false);
    this.onValueChange = Library.init(options, 'onValueChange');
    this.pattern = Library.init(options, 'pattern', '');
    this.placeholder = Library.init(options, 'placeholder', '');
    this.rows = Library.init(options, 'rows', 1);
    this.style = Library.init(options, 'style', {});
    this.tooltip = Library.init(options, 'tooltip', false);
    this.value = Library.init(options, 'value');
    this.visibility = Library.init(options, 'visibility', true);
  }
}
