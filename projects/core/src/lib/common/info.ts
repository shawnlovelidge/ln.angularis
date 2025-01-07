
//
// Info
//
export class Info {
  public company: string;
  public author: string;
  public copyright: string;
  //
  // Constructor
  //
  constructor(public library: string) {
    this.author = `Lovelidge, Shawn`;
    this.company = 'LernenderCorp LLC';
    this.copyright = 'Copyright 2023';
  }
}