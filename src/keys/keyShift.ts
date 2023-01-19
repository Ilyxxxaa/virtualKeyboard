import Key from './key';

class KeyShift extends Key {
  protected input() {
    const state = this.state;
    state.data = {
      ...state.data,
      shift: !state.data.shift,
    };
  }

  protected down() {
    const state = this.state;
    state.data = {
      ...state.data,
      shift: true,
    };
  }

  protected up() {
    const state = this.state;
    state.data = {
      ...state.data,
      shift: false,
    };
  }
}
export default KeyShift;
