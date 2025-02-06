import { InjectionToken } from '@angular/core';
import { IAgAppThemeConfig } from './app-theme-config.interface';
//
// APP_THEME_CONFIGURATION
//
export const APP_THEME_CONFIGURATION = new InjectionToken<IAgAppThemeConfig>(
  'ag-app-theme-config'
);
