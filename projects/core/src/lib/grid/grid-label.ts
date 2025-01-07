import * as Library from '../library/index';

/**
 * Class: GridLabel
 */
export class GridLabel {
  private _format: string;
  private _subject: string;
  private _label: string | undefined;
  private _selectedLabel: string;
  private _selected: number;
  private _total: number;

  get total() {
    return this._total;
  }

  set total(value) {
    this._total = value;
    this.set(value);
  }

  get selected(): number {
    return this._selected;
  }

  set selected(value: number) {
    this._selected = value;
    this.set(value);
  }

  get label() {
    return this._label;
  }

  set(value: number) {
    this._label = this._format
      .replace('X', value.toString())
      .replace('SUBJECT', this._getSubject().toString());
  }

  _getSubject(): string {
    if (this._selected > 0) {
      return this._selectedLabel;
    } else {
      return this._subject;
    }
  }

  constructor(options?: Object | undefined | null) {
    this._label = undefined;
    this._format = Library.init(options, 'format', 'X SUBJECT');
    this._selected = Library.init(options, 'selected', 0);
    this._subject = Library.init(options, 'subject', 'objects');
    this._selectedLabel = Library.init(options, 'selectedLabel', 'selected');
    this._total = Library.init(options, 'total', 0);
  }
}
