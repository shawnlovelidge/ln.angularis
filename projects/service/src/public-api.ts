/*
 * Public API Surface of service
 */
export * from './lib/common/ag-clipboard.service';
export * from './lib/common/ag-message-bus.service';
export * from './lib/common/ag-node.service';
export * from './lib/ag-authentication-guard/ag-authentication-guard.service';
export * from './lib/ag-authentication/ag-authentication.provider';
export * from './lib/ag-authentication/ag-authentication.service';
export * from './lib/ag-resource/ag-resource.service';
export * from './lib/ag-resource/ag-environment.config';
export * from './lib/ag-resource/ag-environment.service';
export * from './lib/ag-app-theme/ag-app-theme.service';
export * from './lib/ag-interceptor/ag-interceptor.service';
export * from './lib/ag-json/ag-json.service';

//
// Config
//
import {
  IAgAppThemeProperty,
  IAgAppTheme,
  IAgAppThemeConfig,
} from './lib/ag-app-theme/app-theme-config.interface';
//
// Export the interfaces as types
//
export type {
  IAgAppThemeProperty,
  IAgAppTheme,
  IAgAppThemeConfig,
};
export { APP_THEME_CONFIGURATION } from './lib/ag-app-theme/app-theme-config';

