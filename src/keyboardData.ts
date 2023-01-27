import { IKeyboardData } from './keyboardState';

class KeyboardData implements IKeyboardData {
  content: string;
  langIndex: number;
  shift: boolean;
  caps: boolean;

  constructor(data: IKeyboardData) {
    this.content = data.content;
    this.langIndex = data.langIndex;
    this.shift = data.shift;
    this.caps = data.caps;
  }

  static load() {
    const loaded = localStorage.getItem('savedState');
    return new KeyboardData(JSON.parse(loaded as string));
  }

  save() {
    localStorage.setItem('savedState', JSON.stringify(this));
  }
}

export default KeyboardData;
