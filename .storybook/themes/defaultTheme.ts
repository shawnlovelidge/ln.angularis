import { create } from '@storybook/theming/create';

const primaryColor = '#0d1427';
const secondaryColor = '#353947';

const colorGray100 = '#f8f9fa';
const colorGray200 = '#e9ecef';
const colorGray300 = '#dee2e6';
const colorGray400 = '#ced4da';
const colorGray500 = '#adb5bd';
const colorGray600 = '#6c757d';
const colorGray700 = '#495057';
const colorGray800 = '#343a40';
const colorGray900 = '#212529';

const textColor = colorGray100;
const borderColor = colorGray800;

//
// Theme
//
export default create({
  base: 'light',
  //
  // Typography
  //
  fontBase: '"Poppins-Regular", "Roboto", sans-serif',
  //fontBase: '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
  brandTitle: 'Lernender LLC Storybook',
  brandUrl: 'https://lernendercorp.com',
  brandImage: 'https://placehold.co/350x150',
  brandTarget: '_self',

  // UI
  // appBg: secondaryColor,
  // appContentBg: secondaryColor,
  // appPreviewBg: primaryColor,
  // appBorderColor: borderColor,
  appBorderRadius: 4,

  //
  // Text colors
  //
  // textColor: textColor,
  // textInverseColor: textColor,

  //
  // Toolbar default and active colors
  //
  // barTextColor: textColor,
  // barSelectedColor: '#585C6D',
  // barHoverColor: '#585C6D',
  // barBg: secondaryColor,

  //
  // Form colors
  //

  // inputBg: '#ffffff',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2,
});
