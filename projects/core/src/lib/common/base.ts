import * as Library from '../library/index';
import { Guid } from './guid';

export interface IBase {
  uid: Guid;
  id: number;
  active: boolean;
  disabled: boolean;
  hidden: boolean;
  name: string;
  description: string;
  label: string;
  hasId(): boolean;
  isActive(): boolean;
  isVisible(): boolean;
  hasDescription(): boolean;
  hasName(): boolean;
  hasLabel(): boolean;
};

/**
 * Class: Simple
 */
export class Base implements IBase {
  public uid: Guid;
  public id: number;
  public active: boolean;
  public disabled: boolean;
  public hidden: boolean;
  public name: string;
  public description: string;
  public label: string;
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
   * Constructor()
   */
  constructor(options?: Object | undefined | null) {
    this.active = Library.init(options, 'active', false);
    this.description = Library.init(options, 'description');
    this.disabled = Library.init(options, 'disabled', false);
    this.hidden = Library.init(options, 'hidden', false);
    this.id = Library.init(options, 'id');
    this.name = Library.init(options, 'name');
    this.label = Library.init(options, 'label');
    this.uid = Guid.create();
  }
}
