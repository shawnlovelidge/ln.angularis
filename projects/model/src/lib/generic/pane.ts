import { Library, Action } from '@angularis/core';

export class Pane extends Action {
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

  private _width: number = 0;
  private _offsetWidth: number = 0;
  private _open: boolean = false;
  private _cb: (o: Pane) => void;

  constructor(options?: Partial<Pane>) {
    super(options);
    this._cb = Library.init(options, 'cb');
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
