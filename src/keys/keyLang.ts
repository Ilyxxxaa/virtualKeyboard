import KeyboardState from '../keyboardState';
import Key from './key';

class KeyLang extends Key {
  constructor(parentNode: HTMLElement, data: string, protected state: KeyboardState) {
    super(parentNode, data, state, 'key key_lang');
  }

  protected input() {
    const state = this.state;
    state.data = {
      ...state.data,
      langIndex: (state.data.langIndex + 1) % state.languages.length,
    };
  }
}

export default KeyLang;
