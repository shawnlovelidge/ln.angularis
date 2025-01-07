export interface ICheckBox {
  checked: boolean;
  hidden: boolean;
}
/**
 * Class: CheckBox
 */
export class CheckBox implements ICheckBox {
  public checked: boolean;
  public hidden: boolean;
  constructor(options?: ICheckBox) {
    this.checked = options?.checked ?? false;
    this.hidden = options?.hidden ?? false;
  }
}
