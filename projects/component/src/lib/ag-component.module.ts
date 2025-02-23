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
import { AgChip } from './ag-chip/ag-chip';
import { AgDialog } from './ag-dialog/ag-dialog';
import { AgDropDown } from './ag-dropdown/ag-dropdown';
import { AgHero } from './ag-hero/ag-hero';
import { AgHyperLink } from './ag-hyperlink/ag-hyperlink';
import { AgInput } from './ag-input/ag-input';
import { AgJson } from './ag-json/ag-json';
import { AgList } from './ag-list/ag-list';
import { AgMenu } from './ag-menu/ag-menu';
import { AgMenuOption } from './ag-menu-option/ag-menu-option';
import { AgRouterLinkMenu } from './ag-routerlink-menu/ag-routerlink-menu';
import { AgNavMenu } from './ag-nav-menu/ag-nav-menu';
import { AgNavMenuItem } from './ag-nav-menu-item/ag-nav-menu-item';
import { AgRadioButton } from './ag-radio-button/ag-radio-button';
import { AgSvg } from './ag-svg/ag-svg';
import { AgTab } from './ag-tab/ag-tab';
import { AgTabPanel } from './ag-tab-panel/ag-tab-panel';
import { AgTable } from './ag-table/ag-table';
import { AgTextArea } from './ag-textarea/ag-textarea';
import { AgToggle } from './ag-toggle/ag-toggle';
import { AgToolBar } from './ag-toolbar/ag-toolbar';
import { AgWizard } from './ag-wizard/ag-wizard';
import { AgWizardStep } from './ag-wizard-step/ag-wizard-step';

//
// Export all your components here
//
const components = [
  AgAccordion,
  AgBanner,
  AgButton,
  AgCard,
  AgCheckBox,
  AgChip,
  AgDialog,
  AgDropDown,
  AgHero,
  AgHyperLink,
  AgInput,
  AgJson,
  AgList,
  AgMenu,
  AgMenuOption,
  AgRouterLinkMenu,
  AgNavMenu,
  AgNavMenuItem,
  AgRadioButton,
  AgSvg,
  AgTab,
  AgTabPanel,
  AgTable,
  AgTextArea,
  AgToggle,
  AgToolBar,
  AgWizard,
  AgWizardStep,
];

// Import all your components here
// Add more components as needed

@NgModule({
  imports: [CommonModule, FontAwesomeModule, [...components]],
  exports: [...components],
})
export class AgComponentModule {}
