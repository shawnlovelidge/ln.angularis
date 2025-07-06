import {
  ApplicationConfig,
  provideZonelessChangeDetection
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
// Color Themes
//
import { default as color_themes } from '../json/app-theme.json';
//
// Get at the environment configuration
//
import {
  HTTP_ENVIRONMENT_CONFIGURATION,
  AgEnvironmentService,
  AgJsonService
} from '@angularis/service';

//
// Get at the environment configuration
//
import {
  IAgAppThemeProperty,
  IAgAppTheme,
  IAgAppThemeConfig,
  APP_THEME_CONFIGURATION,
  AgAppThemeService,
} from '@angularis/service';
//
// Application Configuration
//
export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_THEME_CONFIGURATION,
      useValue: color_themes,
    },
    {
      provide: AgAppThemeService,
      useClass: AgAppThemeService,
      deps: [APP_THEME_CONFIGURATION],
      multi: false,
    },
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
    provideZonelessChangeDetection(),
    provideRouter(routes),
  ],
};
