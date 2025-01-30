import { Routes } from '@angular/router';
import { LnAccordion } from './feature/ln-accordion/ln-accordion';
import { LnBanner, LnButton, LnHero } from './feature';
import { LnCard } from './feature/ln-card/ln-card';
import { LnCheckBox } from './feature/ln-checkbox/ln-checkbox';
import { LnHyperLink } from './feature/ln-hyperlink/ln-hyperlink';
import { LnJson } from './feature/ln-json/ln-json';
import { LnRadioButton } from './feature/ln-radio-button/ln-radio-button';
import { LnTabPanel } from './feature/ln-tab-panel/ln-tab-panel';
import { LnToggle } from './feature/ln-toggle/ln-toggle';
import { LnToolBar } from './feature/ln-toolbar/ln-toolbar';
import { LnList } from './feature/ln-list/ln-list';


export const routes: Routes = [
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
];

export default routes;
