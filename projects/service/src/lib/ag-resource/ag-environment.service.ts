import { Injectable, Inject, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { Environment, Library } from '@angularis/core';
import { IAgEnvironmentConfig, HTTP_ENVIRONMENT_CONFIGURATION } from './ag-environment.config';
import { isPlatformBrowser } from '@angular/common';
//
// Window Reference
//
declare var window: any;

@Injectable()
export class AgEnvironmentService implements OnDestroy {
  //
  // Private Variables
  //
  private _default!: Environment;
  //
  // Public Variables
  //
  public environments: IAgEnvironmentConfig;
  public hasBrowser: boolean = false;
  public platformId = inject(PLATFORM_ID);
  //
  // default()
  //
  public get default(): Environment {
    return this._default;
  }
  //
  // hasDefault()
  //
  public hasDefault(): boolean {
    return Library.isDefined(this._default);
  }
  //
  // ngOnDestroy()
  //
  public ngOnDestroy() {}
  //
  // Constructor()
  //
  constructor(
    @Inject(HTTP_ENVIRONMENT_CONFIGURATION)
    environments: IAgEnvironmentConfig
  ) {
    //
    // Set Environments
    //
    this.environments = environments;
    ///
    // setDefault
    //
    this.setDefault();
  }
  //
  // setDefault()
  //
  public setDefault() {
    //
    // Init Browser
    //
    this.hasBrowser = isPlatformBrowser(this.platformId);
    //
    // Init hostname
    //
    let hostname: any = null;
    //
    // Extract Host Name
    //
    if (
      this.hasBrowser &&
      typeof window !== 'undefined' &&
      Library.isDefined(window.location) &&
      Library.hasOwnProperty(window, 'location') &&
      Library.hasOwnProperty(window.location, 'hostname')
    ) {
      hostname = window.location.hostname.toLowerCase();
    }
    //
    // Reset Default Environment
    //
    this.environments.default = {};
    //
    // If we have a host name
    //
    if (Library.isStringWithLength(hostname)) {
      let index: number = -1;
      //
      // Set Environment to the default environment
      //
      for (const [key, value] of Object.entries(this.environments)) {
        const obj = value['hostname'];
        const { url } = obj;

        if (url && url === hostname) {
          index = Number(key);
        }

        if (index > -1) break;

        continue;
      }
      //
      // If we have an index
      //
      if (index > -1) {
        //
        // Set the environment
        //
        this._default = new Environment(this.environments[index]);
        //
        // Set the environment
        //
        window['environment'] = this._default;
      }
    }
  }
}
