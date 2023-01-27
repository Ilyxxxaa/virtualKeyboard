import KeyboardState from '../keyboardState';
import Key from './key';

class KeyCapsLock extends Key {
  constructor(parentNode: HTMLElement, data: string, protected state: KeyboardState) {
    super(parentNode, data, state, 'key key_capsLock');
  }

  protected input() {
    console.log('CAPS');
    const state = this.state;
    state.data = {
      ...state.data,
      caps: !state.data.caps,
    };
    if (state.data.caps) {
      this.node.classList.add('keyboard__key-down');
    } else {
      this.node.classList.remove('keyboard__key-down');
    }
  }

  protected down() {}

  protected up() {}
}
export default KeyCapsLock;
