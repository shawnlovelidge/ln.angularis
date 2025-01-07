import * as Library from '../library/index';

export class CookieOption {
  public path: string;
  public domain: string;
  public expires: Date;
  public secure: boolean;

  public create(options: any) {
    return new CookieOption({
      path: Library.init(options, 'path', this.path),
      domain: Library.init(options, 'domain', this.domain),
      expires: Library.init(options, 'expires', this.expires),
      secure: Library.init(options, 'secure', this.secure),
    });
  }

  /**
   * Constructor()
   */
  constructor(options?: Object | undefined | null) {
    this.path = Library.init(options, 'path', null);
    this.domain = Library.init(options, 'domain', null);
    this.expires = Library.init(options, 'expires', null);
    this.secure = Library.init(options, 'secure', null);
  }
}
