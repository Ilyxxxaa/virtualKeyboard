import Key from './key';

class KeyCapsLock extends Key {
  protected input() {
    console.log('CAPS');
    const state = this.state;
    state.data = {
      ...state.data,
      caps: !state.data.caps,
    };
  }
}
export default KeyCapsLock;
