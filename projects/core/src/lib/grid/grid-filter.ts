import * as Constant from '../constant';
import { Library, ValidateLibrary } from '../library';

/**
 * Class: GridFilter
 */
export class GridFilter {
  public enabled: boolean;
  public style: Object;
  private _type: string | undefined;
  private _dataType: string;
  private _tokens: any[];
  private _focus: boolean;
  private _pristine: boolean;
  private _touched: boolean;
  private _valid: boolean;
  private _hidden: boolean;
  private _disabled: boolean;
  private _pending: boolean;

  get tokens() {
    return this._tokens;
  }

  public setTokens(type: number, tokens: any[]) {
    //
    // Clear Tokens
    //
    //this.clear(type);
    //
    // Parse param tokens
    //
    if (Library.isArrayWithLength(tokens)) {
      let size = 1;
      for (let i = 0; i < tokens.length; i += size) {
        size =
          ValidateLibrary.hasComparisonOperator(tokens[i].value) ||
          ValidateLibrary.hasInverseOperator(tokens[i].value)
            ? 2
            : 1;
        this._tokens.push({
          token: tokens.slice(i, i + size),
          dataType: this._dataType,
          type,
        });
      }
    }
  }

  //
  // type()
  //
  public get type() {
    return this._type;
  }
  //
  // type()
  //
  public set type(type) {
    this._type = type;
  }

  public get focus() {
    return this._focus;
  }

  public set focus(focus) {
    this._focus = focus;
  }
  public get dataType() {
    return this._dataType;
  }

  public hasTokens() {
    return Library.isArrayWithLength(this.tokens);
  }

  public hasFocus() {
    return this.focus;
  }

  //
  // pristine()
  // Definition: A control is pristine if the user has not yet changed the data in the UI.
  //
  public get pristine() {
    return this._pristine;
  }
  //
  // dirty()
  // Definition: A control is dirty if the user has changed the data in the UI.
  //
  public get dirty() {
    return !this._pristine;
  }
  //
  // touched()
  // Definition: A control is marked touched once the user has triggered a blur event on it.
  //
  public get touched() {
    return this._touched;
  }
  //
  // touched()
  // Definition: A control is marked touched once the user has triggered a blur event on it.
  //
  public set touched(data) {
    this._touched = data;
  }
  //
  // untouched()
  // Definition: A control is untouched if the user has not yet triggered a blur event on it.
  //
  public get untouched() {
    return !this._touched;
  }

  //
  // valid()
  // Definition: This control has passed all validation checks.
  //
  public get valid() {
    return this._valid;
  }
  //
  // invalid()
  // Definition: This control has failed at least one validation check.
  //
  public get invalid() {
    return !this._valid;
  }
  //
  // pending()
  // Definition: This control is in the midst of conducting a validation check.
  //
  public get pending() {
    return this._pending;
  }
  //
  // hidden()
  // Definition: This control has hidden style.
  //
  public get hidden() {
    return this._hidden;
  }
  //
  // disabled()
  // Definition: This control is exempt from validation checks.
  //
  public get disabled() {
    return this._disabled;
  }

  public clear(type = 0, tokens: any[]) {
    debugger;
    //
    // Switch on type
    //
    switch (type) {
      case Constant.FILTER_TYPE_INTERNAL:
      case Constant.FILTER_TYPE_EXTERNAL:
        if (Library.isDefined(tokens)) {
          //this._tokens = differenceBy(this._tokens, tokens, 'value');
        } else {
          //
          //  If there are token then remove the corresponding
          //  tokes assocaited with the type
          //
          if (Library.isArrayWithLength(this._tokens)) {
            this._tokens = this._tokens.filter((t) => (t.type & type) !== type);
          }
        }
        break;
      default:
        this._disabled = false;
        this._pending = false;
        this._pristine = true;
        this._touched = false;
        this._valid = false;
        this._focus = false;

        if (Library.isArrayWithLength(this._tokens)) {
          this._tokens.length = 0;
        }
        this._tokens = [];
        break;
    }
  }

  constructor(options?: Partial<GridFilter>) {
    this._type = undefined;
    this._tokens = [];
    this._focus = false;
    this._pristine = false;
    this._touched = false;
    this._valid = false;
    this._disabled = false;
    this._pending = false;
    //this.clear(Constant.FILTER_TYPE_NONE);
    this._dataType = Library.init(options, 'dataType', 'string').toLowerCase();
    this._hidden = Library.init(options, 'hidden', false);
    this.enabled = Library.init(options, 'enabled', false);
    this.style = Library.init(options, 'style', {});
    this.type = Library.init(options, 'type', Constant.FILTER_TYPE_NONE);
  }
}
