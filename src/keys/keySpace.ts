import Key from './key';

class KeySpace extends Key {
  protected input() {
    const state = this.state;
    state.data = {
      ...state.data,
      content: state.data.content + ' ',
    };
  }
}
export default KeySpace;
