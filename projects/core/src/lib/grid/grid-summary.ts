import { Library } from '../library';

export class GridSummary {
  private _total: number;
  private _selected: number;
  private _visible: number;
  private _label: string;
  private _hidden: number;
  private _checked: number;
  private _format: string;
  private _subject: string;

  get total() {
    return this._total;
  }

  get selected() {
    return this._selected;
  }

  get visible() {
    return this._visible;
  }

  get label() {
    return this._label;
  }

  get hidden() {
    return this._hidden;
  }

  hasVisibleRows() {
    return this._visible > 0;
  }

  hasHiddenRows() {
    return this._hidden > 0;
  }

  hasFilteredRows() {
    return this._visible > 0 && this._hidden > 0;
  }

  hasSelected() {
    return this._selected > 0;
  }

  hasChecked() {
    return this._checked > 0;
  }

  allHiddenRows() {
    return this._total === this._hidden;
  }

  allVisibleRows() {
    return this._total === this._visible;
  }

  _set(value: number, subject: string) {
    this._label = this._format
      .replace('X', value.toString())
      .replace('SUBJECT', subject);
  }

  run(data: any[]) {
    this._total = 0;
    this._hidden = 0;
    this._visible = 0;
    this._checked = 0;
    this._selected = 0;
    if (Library.isArrayWithLength(data)) {
      data.forEach((r) => {
        this._total++;
        this._hidden += r['hidden'] ? 1 : 0;
        this._visible += !r['hidden'] ? 1 : 0;
        this._checked += r['checked'] ? 1 : 0;
        this._selected += r['selected'] ? 1 : 0;
      });
    }

    this._set(this._visible, this._subject);

    return this;
  }

  constructor(options?: Partial<GridSummary>) {
    this._format = Library.init(options, 'format', 'X SUBJECT');
    this._hidden = Library.init(options, 'hidden', 0);
    this._checked = Library.init(options, 'checked', 0);
    this._label = '';
    this._selected = Library.init(options, 'selected', 0);
    this._subject = Library.init(options, 'subject', 'objects');
    this._total = Library.init(options, 'total', 0);
    this._visible = Library.init(options, 'visible', 0);
  }
}
