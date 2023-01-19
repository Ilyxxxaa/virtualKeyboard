import boardEn from './langs/en';
import boardRu from './langs/ru';
import Signal from './common/signal';

export interface IKeyboardData {
  content: string;
  langIndex: number;
  shift: boolean;
  caps: boolean;
}

class KeyboardState {
  public languages = [boardRu, boardEn];
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
