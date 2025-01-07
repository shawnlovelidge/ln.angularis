import * as Library from '../library/index';

export class Style {
  public height: string | number | undefined;
  public width: string | number | undefined;
  public backgroundColor: string | undefined;
  public color: string | undefined;
  public font: string  | undefined;
  public fontSize: string  | undefined;

  //
  // Public Methods
  //
  public hasHeight = (): boolean => Library.isDefined(this.height);
  public hasWidth = (): boolean => Library.isDefined(this.width);
  public hasColor = (): boolean => Library.isDefined(this.color);
  public hasBackgroundColor = (): boolean => Library.isDefined(this.backgroundColor);
  public hasFont = (): boolean => Library.isDefined(this.font);
  public hasFontSize = (): boolean => Library.isDefined(this.fontSize);

  constructor() {
    this.height = undefined;
    this.width = undefined;
    this.backgroundColor = undefined;
    this.color = undefined;
    this.font = undefined;
    this.fontSize = undefined;
  }
}
