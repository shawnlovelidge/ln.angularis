
export class Sort {
  public direction: number = 1;
  /**
   * toggle()
   */
  toggle() {
    this.direction = this.direction === 1 ? -1 : 1;
  }

  /**
   * isAscending
   * @returns {boolean}
   */
  isAscending() {
    return this.direction === 1;
  }

  /**
   * isDescending()
   * @returns {boolean}
   */
  isDescending() {
    return this.direction === -1;
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<Sort>) {
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Sort;
