export interface ICheckBox {
  checked: boolean;
  hidden: boolean;
}
/**
 * Class: CheckBox
 */
export class CheckBox implements ICheckBox {
  public checked: boolean = false;
  public hidden: boolean = false;
  constructor(options?: Partial<CheckBox>) {
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default CheckBox;
