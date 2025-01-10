import { InjectionToken } from '@angular/core';
import { AuthenticationConfig } from '@angularis/model';

export const AUTH_CONFIG = new InjectionToken<AuthenticationConfig>(
  'auth_config'
);

export const DefaultAuthenticationConfig: AuthenticationConfig = {
  baseUrl: 'localhost',
};

export function AuthenticationServiceFactory(config: AuthenticationConfig) {
  return new AuthenticationConfig(config);
}
