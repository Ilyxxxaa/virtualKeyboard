import KeyboardState from '../keyboardState';
import Key from './key';

class KeyBackspace extends Key {
  constructor(parentNode: HTMLElement, data: string, protected state: KeyboardState) {
    super(parentNode, data, state, 'key key_backspace');
  }

  protected input() {
    const state = this.state;
    state.data = {
      ...state.data,
      content: state.data.content.slice(0, -1),
    };
  }
}
export default KeyBackspace;
