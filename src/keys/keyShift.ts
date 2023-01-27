import KeyboardState from '../keyboardState';
import Key from './key';

class KeyShift extends Key {
  constructor(parentNode: HTMLElement, data: string, protected state: KeyboardState) {
    super(parentNode, data, state, 'key key_shift');
  }

  protected input() {}

  protected down() {
    super.down();
    const state = this.state;
    state.data = {
      ...state.data,
      shift: true,
    };
  }

  protected up() {
    super.up();
    const state = this.state;
    state.data = {
      ...state.data,
      shift: false,
    };
  }
}
export default KeyShift;
