import { Routes } from '@angular/router';
import { LnBanner, LnButton, LnHero } from './feature';
import { LnTabPanel } from './feature/ln-tab-panel/ln-tab-panel';
import { LnHyperLink } from './feature/ln-hyperlink/ln-hyperlink';
import { LnJson } from './feature/ln-json/ln-json';
import { LnIcon } from './feature/ln-icon/ln-icon';
import { LnCheckBox } from './feature/ln-checkbox/ln-checkbox';
import { LnToolBar } from './feature/ln-toolbar/ln-toolbar';
import { LnRadioButton } from './feature/ln-radio-button/ln-radio-button';

export const routes: Routes = [
  {
    path: 'ln-banner',
    canActivate: [],
    component: LnBanner,
  },
  {
    path: 'ln-button',
    canActivate: [],
    component: LnButton,
  },
  {
    path: 'ln-hero',
    canActivate: [],
    component: LnHero,
  },
  {
    path: 'ln-tab-panel',
    canActivate: [],
    component: LnTabPanel,
  },
  {
    path: 'ln-hyperlink',
    canActivate: [],
    component: LnHyperLink,
  },
  {
    path: 'ln-json',
    canActivate: [],
    component: LnJson,
  },
  {
    path: 'ln-icon',
    canActivate: [],
    component: LnIcon,
  },
  {
    path: 'ln-checkbox',
    canActivate: [],
    component: LnCheckBox,
  },
  {
    path: 'ln-toolbar',
    canActivate: [],
    component: LnToolBar,
  },
  {
    path: 'ln-radio-button',
    canActivate: [],
    component: LnRadioButton,
  },
];

export default routes;
