import Key from './key';

class KeyBackspace extends Key {
  protected input() {
    const state = this.state;
    state.data = {
      ...state.data,
      content: state.data.content.slice(0, -1),
    };
  }
}
export default KeyBackspace;
