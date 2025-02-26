//
// Anglaris. Core library.
//
import { Library, Error, Action } from '@angularis/core';
//
// Step class.
//
export class Step<T> extends Action {
  public model?: T | undefined = undefined;
  public completed: boolean = false;
  public errors: Error[] = [];
  //
  // Properties.
  //
  public hasModel = (): boolean => Library.isObject(this.model);
  public hasErrors = (): boolean => this.errors.length > 0;
  public isCompleted = (): boolean => this.completed;
  //
  // Constructor.
  //
  constructor(options?: Partial<Step<T>>) {
    super(options);
    Object.assign(this, options);
  }
}
