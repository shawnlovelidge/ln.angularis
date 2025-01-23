import {
  ApplicationConfig,
  inject,
  Injector,
  Optional,
  provideAppInitializer,
  provideEnvironmentInitializer,
  Provider,
  provideZoneChangeDetection,
  SkipSelf,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { Environment } from '@angularis/core';

//
// Routes
//
import { routes } from './app.routes';
//
// Environments
//
import { default as environments_default } from '../json/environments.json';
//
// Get at the environment configuration
//
import {
  HTTP_ENVIRONMENT_CONFIGURATION,
  AgEnvironmentService
} from '@angularis/service';
//
// Application Configuration
//
export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: HTTP_ENVIRONMENT_CONFIGURATION,
      useValue: environments_default,
    },
    {
      provide: AgEnvironmentService,
      useClass: AgEnvironmentService,
      deps: [HTTP_ENVIRONMENT_CONFIGURATION],
      multi: false,
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
