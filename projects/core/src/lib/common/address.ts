import { Library } from '../library';
import { Base } from './base';
//
// Action
//
export class Address extends Base {
  public street1: string = '';
  public street2: string = '';
  public city: string = '';
  public state: string = '';
  public zipcode: string = '';
  public country: string = '';
  //
  // hasFunctions
  //
  public hasStreet1 = () => Library.isStringWithLength(this.street1);
  public hasStreet2 = () => Library.isStringWithLength(this.street2);
  public hasCity = () => Library.isStringWithLength(this.city);
  public hasState = () => Library.isStringWithLength(this.state);
  public hasZipCode = () => Library.isStringWithLength(this.zipcode);
  public hasCountry = () => Library.isStringWithLength(this.country);
  //
  // hasAddress()
  //
  public hasAddress = () => {
    return (
      this.hasStreet1() &&
      this.hasStreet2() &&
      this.hasCity() &&
      this.hasState() &&
      this.hasZipCode() &&
      this.hasCountry()
    );
  };
  //
  // Constructor
  //
  constructor(options?: Partial<Address>) {
    super(options);
    Object.assign(this, options);
  }
}
