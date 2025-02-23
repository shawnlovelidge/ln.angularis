//
// Anglaris. Core library.
//
import { TemplateRef } from '@angular/core';
import { Library, Error } from '@angularis/core';
//
// Step interface.
//
export interface IStep<T> {
  id: number;
  title: string;
  model?: T | undefined;
  template?: TemplateRef<any>;
  component?: any | undefined;
  disabled: boolean;
  hidden: boolean;
  active: boolean;
  style: Partial<CSSStyleDeclaration>;
  completed: boolean;
  errors: Error[];

  hasModel(): boolean;
  hasTemplate(): boolean;
  hasComponent(): boolean;
  hasTitle(): boolean;
  isDisabled(): boolean;
  isHidden(): boolean;
  isActive(): boolean;
  isCompleted(): boolean;
  hasErrors(): boolean;
}

//
// Step class.
//
export class Step<T> implements IStep<T> {
  public id: number = 0;
  public title: string = '';
  public model?: T | undefined = undefined;
  public template?: TemplateRef<any>;
  public component?: any | undefined = undefined;
  public disabled: boolean = false;
  public hidden: boolean = false;
  public active: boolean = false;
  public style: Partial<CSSStyleDeclaration> = {};
  public completed: boolean = false;
  public errors: Error[] = [];
  //
  // Properties.
  //
  public hasModel = (): boolean => Library.isObject(this.model);
  public hasTemplate = (): boolean => Library.isDefined(this.template);
  public hasComponent = (): boolean => Library.isDefined(this.component);
  public hasTitle = (): boolean => Library.isStringWithLength(this.title);
  public isDisabled = (): boolean => this.disabled;
  public isHidden = (): boolean => this.hidden;
  public isActive = (): boolean => this.active;
  public isCompleted = (): boolean => this.completed;
  public hasErrors = (): boolean => this.errors.length > 0;
  public hasStyle = (): boolean => Library.isObject(this.style);
  //
  // Constructor.
  //
  constructor() {}
}
