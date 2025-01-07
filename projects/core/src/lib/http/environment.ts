import * as Library from '../library/index';
import { Guid } from '../common/guid';

export class Environment {
  public uid: Guid;
  public apiUrl: string;
  public authUrl: string;
  public version: string;
  public security: boolean;
  public production: boolean;
  public hmr: boolean;
  public pkg: any;
  public buildDate: Date;

  /**
   * Constructor()
   */
  constructor(options?: Object | undefined | null) {
    this.uid = Guid.create();
    this.apiUrl = Library.init(options, 'apiUrl');
    this.authUrl = Library.init(options, 'authUrl');
    this.version = Library.init(options, 'version');
    this.security = Library.init(options, 'security', false);
    this.production = Library.init(options, 'production', false);
    this.hmr = Library.init(options, 'hmr', false);
    this.pkg = Library.init(options, 'pkg', {});
    this.buildDate = Library.init(options, 'buildDate', new Date());
  }
}
