import * as Library from '../library/index';
/**
 * Class: Endpoint
 */
export class Endpoint {
  public secure: boolean;
  public requireToken: boolean;
  public url: string;
  public port: number;
  public suffix: string;
  public type: string;
  private _headers: object[];
  /**
   * Get the headers assigned for this endpoint
   * @returns {Array}
   */
  headers() {
    return [...this._headers];
  }

  /**
   * Check if any headers are on this endpoint
   * @returns {boolean}
   */
  hasHeaders() {
    return Library.isArrayWithLength(this._headers);
  }

  /**
   * hasPort()
   */
  hasPort() {
    return Library.isStringWithLength(this.port);
  }

  /**
   * isSecure()
   */
  isSecure(): boolean {
    return this.secure;
  }

  /**
   * hasUrl()
   */
  hasUrl(): boolean {
    return Library.isStringWithLength(this.url);
  }
  /**
   * hasSuffix()
   */
  hasSuffix(): boolean {
    return Library.isStringWithLength(this.suffix);
  }
  /**
   * hasType()
   */
  hasType(): boolean {
    return Library.isDefined(this.type);
  }

  /**
   * compose()
   */
  compose() {
    let _url = 'HTTP://';

    if (this.hasUrl()) {
      _url += 'URL';

      if (this.hasPort()) {
        _url += ':PORT';
      }
    }

    if (this.hasSuffix()) {
      _url += '/SUFFIX';
    }

    _url = _url
      .replace(/HTTP/g, this.secure ? 'https' : 'http')
      .replace(/URL/g, this.hasUrl() ? this.url.toString() : '')
      .replace(/PORT/g, this.hasPort() ? this.port.toString() : '')
      .replace(/SUFFIX/g, this.hasSuffix() ? this.suffix.toString() : '')
      .trim();

    return _url;
  }

  /**
   * Constructor()
   */
  constructor(options?: Object | undefined | null) {
    this.port = Library.init(options, 'port');
    this.secure = Library.init(options, 'secure', true);
    this.suffix = Library.init(options, 'suffix');
    this.type = Library.init(options, 'type');
    this.url = Library.init(options, 'url', 'localhost');
    this.requireToken = Library.init(options, 'requireToken', true);
    this._headers = Library.init(options, 'headers', []);
  }
}
