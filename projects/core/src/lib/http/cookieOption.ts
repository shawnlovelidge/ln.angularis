import { Library } from '../library';

export class CookieOption {
  public path: string | null = null;
  public domain: string | null = null;
  public expires: Date | null = null;
  public secure: boolean = false;
  /**
   * Constructor()
   */
  constructor(options?: Partial<CookieOption>) {
    Object.assign(this, options);
  }
}
