import { InjectionToken } from '@angular/core';

//
// Hash Interface
//
export interface IAgEnvironmentSettings<T = any> {
  [key: string]: T;
}
//
// Hash Interface
//
export interface IAgEnvironmentConfig {
  "default": IAgEnvironmentSettings;
  [key: string]: IAgEnvironmentSettings;
}
//
// IAgDefaultEnvironmentConfig Configuration
//
export const IAgDefaultEnvironmentConfig: IAgEnvironmentConfig = {
  default: {},
};
//
// HTTP_ENVIRONMENT_CONFIGURATION
//
export const HTTP_ENVIRONMENT_CONFIGURATION = new InjectionToken<IAgEnvironmentConfig>(
  'http-environment-config'
);
