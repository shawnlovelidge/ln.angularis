import { Library } from '../library';
import { Guid } from './guid';

export interface IBase {
  uid: Guid;
  id: number;
  active: boolean;
  checked: boolean;
  disabled: boolean;
  hidden: boolean;
  name: string;
  description: string;
  type?: string;
  label: string;
  hasId(): boolean;
  isActive(): boolean;
  isVisible(): boolean;
  hasDescription(): boolean;
  hasName(): boolean;
  hasLabel(): boolean;
}

/**
 * Class: Simple
 */
export class Base implements IBase {
  public uid: Guid;
  public id: number = 0;
  public active: boolean = false;
  public disabled: boolean = false;
  public hidden: boolean = false;
  public name: string = '';
  public description: string = '';
  public label: string = '';
  public type?: string = undefined;
  public checked: boolean = false;
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
  isChecked(predicate: Function): boolean {
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
    this.uid = Guid.create();
  }
}


