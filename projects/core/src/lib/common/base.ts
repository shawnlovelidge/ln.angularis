import { Library } from '../library';
import { Guid } from './guid';

export interface IBase {
  uid: string;
  active: boolean;
  checked: boolean;
  description: string;
  disabled: boolean;
  hasDescription(): boolean;
  hasId(): boolean;
  hasLabel(): boolean;
  hasName(): boolean;
  hidden: boolean;
  id: number;
  isActive(): boolean;
  isVisible(): boolean;
  label: string;
  name: string;
  type?: string;
}

/**
 * Class: Simple
 */
export class Base implements IBase {
  public active: boolean = false;
  public checked: boolean = false;
  public description: string = '';
  public disabled: boolean = false;
  public hidden: boolean = false;
  public id: number = 0;
  public label: string = '';
  public name: string = '';
  public type?: string = undefined;
  public uid: string = '';
  /**
   * hasUid()
   * @returns {*}
   */
  hasUid() {
    return Library.isDefined(this.uid);
  }
  /**
   * hasId()
   * @returns {*}
   */
  hasId() {
    return Library.isDefined(this.id);
  }

  /**
   * isActive()
   * @returns {*}
   */
  isActive() {
    return Library.isTrue(this.active);
  }

  /**
   * isChecked()
   * @returns {*}
   */
  isChecked(predicate: Function = () => {}): boolean {
    return Library.isTrue(this.checked);
  }

  /**
   * isVisible()
   * @returns {*|boolean}
   */
  isVisible() {
    return !this.hidden;
  }

  /**
   * hasDescription()
   * @returns {boolean}
   */
  hasDescription() {
    return Library.isStringWithLength(this.description);
  }

  /**
   * hasName()
   * @returns {boolean}
   */
  hasName() {
    return Library.isStringWithLength(this.name);
  }

  /**
   * hasLabel()
   * @returns {*}
   */
  hasLabel() {
    return Library.isStringWithLength(this.label);
  }

  /**
   * hasType()
   * @returns {boolean}
   */
  hasType() {
    return Library.isStringWithLength(this.type);
  }
  /**
   * Constructor()
   */
  constructor(options?: Partial<Base>) {
    Object.assign(this, options);
    this.uid = Guid.create().toString();
  }
}
