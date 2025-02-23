import { Routes } from '@angular/router';
//
// @angularis/component
//
import { LnAccordion } from './feature/ln-accordion/ln-accordion';
import { LnBanner, LnButton, LnHero } from './feature';
import { LnCard } from './feature/ln-card/ln-card';
import { LnCheckBox } from './feature/ln-checkbox/ln-checkbox';
import { LnChip } from './feature/ln-chip/ln-chip';
import { LnDialog } from './feature/ln-dialog/ln-dialog';
import { LnDropDown } from './feature/ln-dropdown/ln-dropdown';
import { LnHome } from './feature/ln-home/ln-home';
import { LnHyperLink } from './feature/ln-hyperlink/ln-hyperlink';
import { LnInput } from './feature/ln-input/ln-input';
import { LnJson } from './feature/ln-json/ln-json';
import { LnList } from './feature/ln-list/ln-list';
import { LnMenu } from './feature/ln-menu/ln-menu';
import { LnRadioButton } from './feature/ln-radio-button/ln-radio-button';
import { LnTabPanel } from './feature/ln-tab-panel/ln-tab-panel';
import { LnTextArea } from './feature/ln-textarea/ln-textarea';
import { LnToggle } from './feature/ln-toggle/ln-toggle';
import { LnToolBar } from './feature/ln-toolbar/ln-toolbar';
import { LnNavMenu } from './feature/ln-nav-menu/ln-nav-menu';
import { LnRouterLInkMenu } from './feature/ln-routerlink-menu/ln-routerlink-menu';

export const routes: Routes = [
  {
    path: '',
    component: LnHome,
  },
  {
    path: 'ln-banner',
    component: LnBanner,
  },
  {
    path: 'ln-button',
    component: LnButton,
  },
  {
    path: 'ln-hero',
    component: LnHero,
  },
  {
    path: 'ln-tab-panel',
    component: LnTabPanel,
  },
  {
    path: 'ln-hyperlink',
    component: LnHyperLink,
  },
  {
    path: 'ln-json',
    component: LnJson,
  },
  {
    path: 'ln-checkbox',
    component: LnCheckBox,
  },
  {
    path: 'ln-toolbar',
    component: LnToolBar,
  },
  {
    path: 'ln-radio-button',
    component: LnRadioButton,
  },
  {
    path: 'ln-accordion',
    component: LnAccordion,
  },
  {
    path: 'ln-card',
    component: LnCard,
  },
  {
    path: 'ln-toggle',
    component: LnToggle,
  },
  {
    path: 'ln-list',
    component: LnList,
  },
  {
    path: 'ln-menu',
    component: LnMenu,
  },
  {
    path: 'ln-dialog',
    component: LnDialog,
  },
  {
    path: 'ln-textarea',
    component: LnTextArea,
  },
  {
    path: 'ln-input',
    component: LnInput,
  },
  {
    path: 'ln-chip',
    component: LnChip,
  },
  {
    path: 'ln-dropdown',
    component: LnDropDown,
  },
  {
    path: 'ln-nav-menu',
    component: LnNavMenu,
  },
  {
    path: 'ln-routerlink-menu',
    component: LnRouterLInkMenu,
  },
];

export default routes;
