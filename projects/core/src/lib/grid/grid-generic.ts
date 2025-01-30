import { Library } from '../library';
import { Base, CheckBox } from '../common';

/**
 * @class GridGeneric
 * @description Defines a generic html object for a container.
 */
export class GridGeneric extends Base {
  public canActivate: boolean;
  public canCheck: boolean;
  public canDelete: boolean;
  public checked: boolean;
  public data: any;
  public deleted: boolean;
  public element: Object;
  public contentField: string;
  public format: string;
  public options: Object;
  public pattern: string;
  public placeholder: string;
  public required: boolean;
  public selected: boolean;
  public expanded: boolean;
  public style: Partial<CSSStyleDeclaration> = {};
  public template: string;
  public checkbox: CheckBox;
  public _deleted: boolean;

  public isChecked() {
    return this.checkbox.checked;
  }

  public isCheckboxHidden() {
    return this.checkbox.hidden;
  }

  public isDeleted() {
    return this.deleted;
  }

  public isActivate() {
    return this.active;
  }

  public hasTemplate() {
    return Library.isStringWithLength(this.template);
  }

  public isExpanded() {
    return this.expanded;
  }

  public hasFormat() {
    return Library.isStringWithLength(this.format);
  }

  public hasContent() {
    if (Library.isDefined(this.data)) {
      if (Library.hasOwnProperty(this.data, this.contentField)) {
        return Library.isArrayWithLength(
          this.data[this.contentField]
        );
      }
    }

    return false;
  }

  constructor(options?: Partial<GridGeneric>) {
    super(options);
    this._deleted = false;
    this.active = Library.init(options, 'active', false);
    this.canActivate = Library.init(options, 'canActivate', false);
    this.canCheck = Library.init(options, 'canCheck', false);
    this.canDelete = Library.init(options, 'canDelete', false);
    this.checked = Library.init(options, 'checked', false);
    this.data = Library.init(options, 'data', {});
    this.deleted = Library.init(options, 'deleted', false);
    this.expanded = Library.init(options, 'expanded', false);
    this.element = Library.init(options, 'element');
    this.contentField = Library.init(
      options,
      'contentField',
      'children'
    );
    this.format = Library.init(options, 'format');
    this.label = Library.init(options, 'label');
    this.options = Object.assign(
      {},
      Library.init(options, 'options', {})
    );
    this.pattern = Library.init(options, 'pattern');
    this.placeholder = Library.init(options, 'placeholder');
    this.required = Library.init(options, 'required', false);
    this.selected = Library.init(options, 'selected', false);
    this.style = Library.init(options, 'style', {});
    this.template = Library.init(options, 'template');
    this.checkbox = Library.init(options, 'checkbox', {
      checked: false,
      hidden: true,
    });
  }
}
