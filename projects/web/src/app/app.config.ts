import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

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
  AgEnvironmentService,
  AgJsonService
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
    provideHttpClient(),
    AgJsonService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
