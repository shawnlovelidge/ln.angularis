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
  public endpoints: Endpoint[] | undefined = [];
  public tags: object = {};
  public version: string = '';
  public buildDate: Date = new Date();

  public api = (): string => this.getEndpoint('api')?.url || '';
  public getEndpoint = (name: string): Endpoint | undefined =>
    this.endpoints?.find(endpoint => endpoint.name.toLowerCase() === name.toLowerCase());
  public hasApi = (): boolean => Library.isStringWithLength(this.api);
  //
  // hasEndpoints
  //
  public hasEndpoints = (): boolean => Library.isArrayWithLength(this.endpoints);
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
    if (options && Library.isArrayWithLength(options.endpoints)) {
      this.endpoints = options?.endpoints?.map(endpoint => new Endpoint(endpoint));
    }
  }
}
