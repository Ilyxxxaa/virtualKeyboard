import Key from './key';

class KeyShift extends Key {
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
