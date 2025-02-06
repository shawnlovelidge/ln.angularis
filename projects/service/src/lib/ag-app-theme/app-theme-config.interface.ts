//
// IAgAppThemeProperty
//
export interface IAgAppThemeProperty {
  [key: string]: string;
}
//
// IAgAppTheme
//
export interface IAgAppTheme {
  id: number;
  name: string;
  label?: string;
  default: boolean;
  property: IAgAppThemeProperty;
}
//
// IAgThemeConfig
//
export interface IAgAppThemeConfig extends Array<IAgAppTheme> {}
