import { CommonModule } from '@angular/common';
import { Component, Inject, Input, signal } from '@angular/core';
//
// Component Library
//
import { AgDropDown } from '@angularis/component';
//
// Library
//
import { Item } from '@angularis/core';
//
// Services
//
import { AgAppThemeService } from '@angularis/service';
import { IAgAppTheme } from '../../../../../service/src/public-api';

@Component({
  imports: [CommonModule, AgDropDown],
  selector: 'ln-theme',
  templateUrl: 'ln-theme.html',
  styleUrls: ['ln-theme.scss'],
  providers: [],
})
export class LnTheme {
  @Input() public label: string = '';
  @Input() public hidden: boolean = false;
  //
  // Public Variables
  //
  public themes = Array<Item>();
  //
  // Constructor
  //
  constructor(private appThemeService: AgAppThemeService) {
    if (appThemeService.hasThemes()) {
      //
      // Load Themes
      //
      this.appThemeService.themes().forEach((theme: IAgAppTheme) => {
        this.themes.push(new Item({ id: theme.id, name: theme.name, active: theme.default }));
      });
      //
      // Set Default Theme
      //
      appThemeService.setDefaultTheme();
    }
  }
  //
  // ngOnInit()
  //
  public ngOnInit() {}
  //
  // handleThemeChange()
  //
  public handleThemeChange(theme: Item): void {
    this.appThemeService.setTheme(theme.name);
  }
}
