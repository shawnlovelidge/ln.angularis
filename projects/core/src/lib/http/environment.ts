import { Library } from '../library';
import { Guid } from '../common';
import { Endpoint } from '../common';
import { Hostname, Authentication } from '../http';
//
// Environment
//
export class Environment {
  public uid: Guid = Guid.create();
  public name: string = '';
  public hostname: Hostname = new Hostname();
  public authentication: Authentication = new Authentication();
  public endoints: Endpoint[] | undefined = [];
  public tags: object = {};
  public version: string = '';
  public buildDate: Date = new Date();

  public getEndpoint = (name: string): Endpoint | undefined => this.endoints?.find((endpoint) => endpoint.name === name);
  public hasApi = (): boolean => Library.isStringWithLength(this.api);
  public api = ():string => this.getEndpoint('api')?.url || '';
  //
  // hasEndpoints
  //
  public hasEndpoints = (): boolean =>Library.isArrayWithLength(this.endoints);
  public hasTags = (): boolean => Library.isObject(this.tags);
  public hasVersion = (): boolean => Library.isStringWithLength(this.version);
  public hasBuildDate = (): boolean => Library.isDate(this.buildDate);
  public hasHostname = (): boolean => Library.isDefined(this.hostname);
  public hasAuthentication = (): boolean => Library.isDefined(this.authentication);
  public hasName = (): boolean => Library.isStringWithLength(this.name);
  
  //
  // Constructor
  //
  constructor(options?: Partial<Environment>) {
    Object.assign(this, options);
    if (options && Library.isArrayWithLength(options.endoints)) {
      this.endoints = options?.endoints?.map((endpoint) => new Endpoint(endpoint));
    }
  }
}
