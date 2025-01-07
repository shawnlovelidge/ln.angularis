import * as Library from '../library/index';
import { Base } from './base';
/**
 * Class: Version
 */
export class Version {
  public expires: Date;
  public major: number;
  public minor: number;
  public patch: number;
  /**
   * Constructor()
   * @param options
   */
  constructor(options?: Object | undefined | null) {
    this.expires = Library.init(options, 'expires', new Date());
    this.major = Library.init(options, 'major', 1);
    this.minor = Library.init(options, 'minor', 0);
    this.patch = Library.init(options, 'patch', 0);
  }
}
