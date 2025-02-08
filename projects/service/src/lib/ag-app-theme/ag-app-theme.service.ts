import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Library } from '@angularis/core';
import { IAgAppTheme, IAgAppThemeConfig } from './app-theme-config.interface';
import { APP_THEME_CONFIGURATION } from './app-theme-config';
//
// AgAppThemeService
//
@Injectable({
  providedIn: 'root',
})
export class AgAppThemeService implements OnDestroy {
  //
  // Private Variables
  //
  private _theme!: IAgAppTheme;
  //
  // themes()
  //
  public themes(): IAgAppTheme[] {
    if (this.hasThemes()) {
      return this.themeConfig;
    }

    return [];
  }

  //
  // Public Variables
  //
  public get theme(): IAgAppTheme {
    return this._theme;
  }
  private set theme(value: IAgAppTheme) {
    this._theme = value;
    //
    // Set Theme Properties
    //
    Object.keys(this._theme.property).forEach(property => {
      this.setProperties(property, this._theme.property[property]);
    });
  }

  //
  // setDefaultTheme()
  //
  public setDefaultTheme(): void {
    if (this.hasThemes()) {
      let index = this.themeConfig.findIndex((t: IAgAppTheme) => t.default);
      this.theme = index == -1 ? this.themeConfig[0] : this.themeConfig[index];
    }
  }
  //
  // setTheme()
  //
  public setTheme(theme: string): void {
    if (!Library.isStringWithLength(theme))
      throw new Error(
        `Application theme '${theme}' is not defined! Use one of the predefined themes within the in the app.config.`
      );

    if (!this.hasThemes())
      throw new Error(
        'Application themes are not configured! Make sure to setup the theme configuration in the app.config.'
      );

    if (this.hasThemes()) {
      let index = this.themeConfig.findIndex(
        (t: IAgAppTheme) =>
          t.name.toLocaleLowerCase() === theme.toLocaleLowerCase()
      );

      if (index === -1) {
        throw new Error(
          `Specified theme '${theme}' does not exists within the in the app.config.`
        );
      } else {
        //
        // Set Current Theme
        //
        this.theme = this.themeConfig[index];
      }
    }
  }
  //
  // hasThemes()
  //
  public hasThemes(): boolean {
    return Library.isArrayWithLength(this.themeConfig);
  }
  //
  // getThemeLabels()
  //
  public getThemeLabels(): string[] {
    if (this.hasThemes()) {
      return this.themeConfig.map((t: IAgAppTheme) => t.name);
    }

    return [];
  }
  //
  // Constructor
  //
  constructor(
    @Inject(APP_THEME_CONFIGURATION) private themeConfig: IAgAppThemeConfig
  ) {
    //
    // Attempt to set the default theme
    //
    this.setDefaultTheme();
  }
  //
  // setProperties()
  //
  private setProperties(property: string, value: string): void {
    document.documentElement.style.setProperty(property, value);
  }
  //
  // ngOnDestroy()
  //
  public ngOnDestroy() {}
}
