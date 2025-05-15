/**
 * Class: Version
 */
export class Version {
  public expires: Date = new Date();
  public major: number = 1;
  public minor: number = 0;
  public patch: number = 0;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Partial<Version>) {
    Object.assign(this, options);
  }
}

export default Version;
