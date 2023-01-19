import Key from './key';

class KeyCapsLock extends Key {
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
