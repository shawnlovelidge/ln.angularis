import { Library } from '../library';

export class Style {
  public height: string | number | undefined = undefined;
  public width: string | number | undefined = undefined;
  public backgroundColor: string | undefined = undefined;
  public color: string | undefined = undefined;
  public font: string | undefined = undefined;
  public fontSize: string | undefined = undefined;

  //
  // Public Methods
  //
  public hasHeight = (): boolean => Library.isDefined(this.height);
  public hasWidth = (): boolean => Library.isDefined(this.width);
  public hasColor = (): boolean => Library.isDefined(this.color);
  public hasBackgroundColor = (): boolean =>
    Library.isDefined(this.backgroundColor);
  public hasFont = (): boolean => Library.isDefined(this.font);
  public hasFontSize = (): boolean => Library.isDefined(this.fontSize);

  constructor(options?: Partial<Style>) {
    Object.assign(this, options);
  }
}

//
// Export default class
//
export default Style;
