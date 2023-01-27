import KeyboardState from '../keyboardState';
import Key from './key';

class KeyTab extends Key {
  constructor(parentNode: HTMLElement, data: string, protected state: KeyboardState) {
    super(parentNode, data, state, 'key key_tab');
  }

  protected input() {
    const state = this.state;
    state.data = {
      ...state.data,
      content: state.data.content + '    ',
    };
  }
}
export default KeyTab;
