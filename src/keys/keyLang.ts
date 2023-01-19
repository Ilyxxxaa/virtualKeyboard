import Key from './key';

class KeyLang extends Key {
  protected input() {
    const state = this.state;
    state.data = {
      ...state.data,
      langIndex: (state.data.langIndex + 1) % state.languages.length,
    };
  }
}

export default KeyLang;
