import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//
// Import all your components here
//
import { AgAccordion } from './ag-accordion/ag-accordion';
import { AgBanner } from './ag-banner/ag-banner';
import { AgButton } from './ag-button/ag-button';
import { AgCard } from './ag-card/ag-card';
import { AgCheckBox } from './ag-checkbox/ag-checkbox';
import { AgDialog } from './ag-dialog/ag-dialog';
import { AgDropDown } from './ag-dropdown/ag-dropdown';
import { AgHero } from './ag-hero/ag-hero';
import { AgHyperLink } from './ag-hyperlink/ag-hyperlink';
import { AgJson } from './ag-json/ag-json';
import { AgList } from './ag-list/ag-list';
import { AgMenu } from './ag-menu/ag-menu';
import { AgMenuOption } from './ag-menu-option/ag-menu-option';
import { AgRadioButton } from './ag-radio-button/ag-radio-button';
import { AgSvg } from './ag-svg/ag-svg';
import { AgTab } from './ag-tab/ag-tab';
import { AgTabPanel } from './ag-tab-panel/ag-tab-panel';
import { AgTable } from './ag-table/ag-table';
import { AgToggle } from './ag-toggle/ag-toggle';
import { AgToolBar } from './ag-toolbar/ag-toolbar';

//
// Export all your components here
//
const components = [
  AgAccordion,
  AgBanner,
  AgButton,
  AgCard,
  AgCheckBox,
  AgDialog,
  AgDropDown,
  AgHero,
  AgHyperLink,
  AgJson,
  AgList,
  AgMenu,
  AgMenuOption,
  AgRadioButton,
  AgSvg,
  AgTab,
  AgTabPanel,
  AgTable,
  AgToggle,
  AgToolBar,
];

// Import all your components here
// Add more components as needed

@NgModule({
  imports: [CommonModule, FontAwesomeModule, [...components]],
  exports: [...components],
})
export class AgComponentModule {}
