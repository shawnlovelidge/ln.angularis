import { Pane } from './pane';

export class Panel {
  public bar: Pane = new Pane();
  public panel: Pane = new Pane();


  constructor(options?: Partial<Panel>) {
    Object.assign(this, options);
  }

  public getBoundingClientRect() {
    return {
      bar: this.bar.getBoundingClientRect(),
      panel: this.panel.getBoundingClientRect(),
    };
  }

  public toggle() {
    if (this.bar.isOpen()) {
      this.bar.toggle();
      this.panel.open = true;
    } else if (this.panel.isOpen()) {
      this.panel.toggle();
      this.bar.open = true;
    }
  }
}
