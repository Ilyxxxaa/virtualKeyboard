import KeyboardState from '../keyboardState';
import Key from './key';

class KeySpace extends Key {
  constructor(parentNode: HTMLElement, data: string, protected state: KeyboardState) {
    super(parentNode, data, state, 'key key_space');
  }

  protected input() {
    const state = this.state;
    state.data = {
      ...state.data,
      content: state.data.content + ' ',
    };
  }
}
export default KeySpace;
