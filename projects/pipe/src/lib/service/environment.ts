import { Library, Endpoint, Base, Guid } from '@angularis/core';
import { Authentication } from '../common/authentication/authentication';
import { Dictionary } from '../generic/dictionary';

export enum EnvironmentType {
  Development = 0,
  Stage = 1,
  QA = 2,
  Production = 3,
}
//
//  interface: IEnvironment
//
export interface IEnvironment {
  authentication: Authentication;
  description: string;
  hostname: Endpoint;
  name: string;
  type: EnvironmentType;
  uid: Guid;

  api: Endpoint;
  dis: Endpoint;
  media: Endpoint;
  microMedia: Endpoint;
  public: Endpoint;
  getTag(key: string): string | boolean | undefined;
  getUrl(key: string): Endpoint | undefined;
  isSSL(): boolean;
}

//
//  class: Environment
//
//  description: The purpose of this class is to hold (n) number of endpoints
//  and per hosted environment in addition authentication per hosted environment
//  is percisted.
//
export class Environment extends Base implements IEnvironment {
  public authentication: Authentication;
  public hostname: Endpoint;
  public type: EnvironmentType = EnvironmentType.Development;

  private _endpoints: Dictionary<Endpoint>;
  private _tags: Dictionary<string | boolean>;

  public isSSL() {
    if (Library.isStringWithLength(this.hostname)) {
      return this.hostname.compose().indexOf('https') > -1;
    }
    return false;
  }

  public get api() {
    return this._endpoints.item('api');
  }

  public get media() {
    return this._endpoints.item('efc');
  }

  public get microMedia() {
    return this._endpoints.item('efc-micro');
  }

  public get public() {
    return this._endpoints.item('public');
  }

  public get dis() {
    return this._endpoints.item('dis');
  }

  public getUrl(key: string): Endpoint | undefined {
    if (Library.isStringWithLength(key)) {
      if (this._endpoints.containsKey(key)) {
        return this._endpoints.item(key);
      }
    }

    return undefined;
  }

  public getTag(key: string): any {
    if (Library.isStringWithLength(key)) {
      if (this._tags.containsKey(key)) {
        return this._tags.item(key);
      }
    }
  }
  //
  // Constructor
  //
  constructor();
  constructor(options: object);
  constructor(options?: any) {
    super(options);
    this.hostname = new Endpoint(Library.init(options, 'hostname'));
    this.authentication = new Authentication({
      ...Library.init(options, 'authentication', {}),
      hostname: this.hostname.url,
    });
    //
    // Initialize options.endpoint
    //
    if (!Library.hasOwnProperty(options, 'endpoints')) {
      options['endpoints'] = {};
    }
    //
    // Convert endpoints to Endpoint objects.
    //
    // const endpoints: { [index: string]: Endpoint } = {};
    Object.keys(options.endpoints).forEach((key) => {
      //endpoints[key] = new Endpoint(options.endpoints[key]);
      options.endpoints[key] = new Endpoint(options.endpoints[key]);
    });
    this._endpoints = new Dictionary<Endpoint>(options.endpoints);
    this._tags = new Dictionary<string | boolean>(
      Library.init(options, 'tags', {})
    );
  }
}
