import { InjectionToken } from '@angular/core';

export interface IAgHttpEnvironmentSettings {
  [setting: string]: any;
}

export interface AgHttpEnvironmentConfig {
  default: IAgHttpEnvironmentSettings;
  [environment: string]: IAgHttpEnvironmentSettings;
}

export const DefaultHttpEnvironmentConfig: AgHttpEnvironmentConfig = {
  default: {},
};

export const HTTP_ENVIRONMENT_CONFIGURATION =
  new InjectionToken<AgHttpEnvironmentConfig>('http-environment-config');
