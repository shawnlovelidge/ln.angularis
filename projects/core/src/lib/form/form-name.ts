import { Element } from '../common/element';
//
// AddressForm
//
export class NameForm {
  public first: Element<string> = new Element<string>();
  public middle: Element<string> = new Element<string>();
  public last: Element<string> = new Element<string>();

  //
  // hasFunctions
  //
  public hasFirst = () => this.first.hasValue();
  public hasMiddle = () => this.middle.hasValue();
  public hasLast = () => this.last.hasValue();

  //
  // isValid()
  //
  public isValid = () => {
    return this.hasFirst() && this.hasMiddle() && this.hasLast();
  };
  //
  // Constructor
  //
  constructor(options?: Partial<NameForm>) {
    Object.assign(this, options);
  }
}
