import { Library } from '@angularis/core';

//
// Menutem
//
export class RouteMenu {
  //
  // Properties
  //
  public id: number = 0;
  public name: string = '';
  public component: string = '';
  public description: string = '';
  //
  // Public Methods
  //
  public hasId = () => Library.isNumber(this.id) && this.id > 0;
  public hasName = () => Library.isStringWithLength(this.name);
  public hasComponent = () => Library.isStringWithLength(this.component);
  public hasDescription = () => Library.isStringWithLength(this.description);

  //
  // Constructor
  //
  constructor(options?: Partial<RouteMenu>) {
    Object.assign(this, options);
  }
}

export default RouteMenu;
