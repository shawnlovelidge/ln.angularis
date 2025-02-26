import { Element } from '../common/element';
//
// AddressForm
//
export class AddressForm {
  public street1: Element<string> = new Element<string>();
  public street2: Element<string> = new Element<string>();
  public city: Element<string> = new Element<string>();
  public state: Element<string> = new Element<string>();
  public zipcode: Element<string> = new Element<string>();
  public country: Element<string> = new Element<string>();
  //
  // hasFunctions
  //
  public hasStreet1 = () => this.street1.hasValue();
  public hasStreet2 = () => this.street2.hasValue();
  public hasCity = () => this.city.hasValue();
  public hasState = () => this.state.hasValue();
  public hasZipCode = () => this.zipcode.hasValue();
  public hasCountry = () => this.country.hasValue();
  //
  // isValid()
  //
  public isValid = () => {
    return this.hasStreet1() && this.hasCity() && this.hasState() && this.hasZipCode() && this.hasCountry();
  };
  //
  // Constructor
  //
  constructor(options?: Partial<AddressForm>) {
    Object.assign(this, options);
  }
}
