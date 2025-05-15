import { Library } from '@angularis/core';
//
// Info
//
export class Info {
  public company: string = 'LernenderCorp LLC';
  public author: string = `Lovelidge, Shawn`;
  public copyright?: string = undefined;

  constructor(options?: Partial<Info>) {
    Object.assign(this, options);

    if (!Library.isStringWithLength(this.copyright))
      this.copyright = `Copyright ${new Date().getFullYear()}`;
  }
}

//
// Export default class
//
export default Info;
