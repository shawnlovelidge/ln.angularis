import { Library } from '../library';
//
// Hostname
//
export class Hostname {
  public url: string = '';
  public secure: boolean = false;
  //
  // hasUrl()
  //
  public hasUrl = (): boolean => Library.isStringWithLength(this.url);
  //
  // hasSecure()
  //
  public isSecure = (): boolean => this.secure;

  //
  // Constructor()
  //
  constructor(options? : Partial<Hostname>) {
    Object.assign(this, options);
  }
}

export default Hostname