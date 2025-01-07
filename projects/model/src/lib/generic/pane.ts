import { Library, Action } from '@angularis/core';

export class Pane extends Action {
  public type: string = '';

  public get width() {
    return this._width;
  }
  public get offsetWidth() {
    return this._offsetWidth;
  }
  public get open() {
    return this._open;
  }

  public set open(val: boolean) {
    this._open = val;
    this.style = this._open
      ? { ...this.style, display: 'block' }
      : { ...this.style, display: 'none' };

    if (this.cb) {
      this.cb(this);
    }
  }

  get cb() {
    return this._cb;
  }

  set cb(obj: (o: Pane) => void) {
    if (Library.isFunction(obj)) {
      this._cb = obj;
    }
  }

  private _width: number;
  private _offsetWidth: number;
  private _open: boolean = false;
  private _cb: (o: Pane) => void;

  constructor();
  constructor(options: object);
  constructor(options?: any) {
    super(options);
    this.style = Library.init(options, 'style', {});
    this._cb = Library.init(options, 'cb');
    this._width = 0;
    this._offsetWidth = 0;
    this.open = Library.init(options, 'open', false);
  }

  public getBoundingClientRect() {
    this._width = 0;

    if (this.isOpen()) {
      const el = document.getElementById(this.uid.toString());

      if (el) {
        this._width = el.getBoundingClientRect().width;
        this._offsetWidth = el.offsetWidth;
      }
    }

    return {
      width: this._width,
      offsetWidth: this._offsetWidth,
    };
  }

  public toggle(): void {
    this.open = !this.open;
  }

  public close() {
    this.open = false;
  }

  public isOpen() {
    return this.open;
  }

  public isClose() {
    return !this.open;
  }
}
