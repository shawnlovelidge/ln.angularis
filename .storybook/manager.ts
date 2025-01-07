import { addons } from '@storybook/manager-api';

//
// Load Theme
//
//import { themes } from '@storybook/theming';
import themes from './themes/defaultTheme';
//
//  Set Theme Configuration
//
addons.setConfig({
  theme: themes,
});
