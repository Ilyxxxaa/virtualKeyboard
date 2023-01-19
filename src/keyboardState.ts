import Signal from './common/signal';

export interface IKeyboardData {
  content: string;
  langIndex: number;
}

class KeyboardState {
  private _data: IKeyboardData;
  get data() {
    return this._data;
  }

  set data(value: IKeyboardData) {
    this._data = value;
    this.onChange.emit(this._data);
  }

  constructor(initialData: IKeyboardData) {
    this._data = initialData;
  }

  public onChange = new Signal<IKeyboardData>();
}

export default KeyboardState;
