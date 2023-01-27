import Control from '../common/control';
import KeyboardState from '../keyboardState';

class Key extends Control {
  private data: string;

  constructor(parentNode: HTMLElement, data: string, protected state: KeyboardState, className: string) {
    super(parentNode, 'div', className);
    this.node.textContent = data;
    this.data = data;

    this.node.onmousedown = () => {
      this.down();
    };

    this.node.onmouseup = () => {
      this.input();
      this.up();
    };

    this.node.onmouseenter = () => {
      this.node.classList.add('keyboard__key-hover');
    };

    this.node.onmouseleave = () => {
      this.node.classList.remove('keyboard__key-hover');
      this.node.classList.remove('keyboard__key-down');
    };
  }

  handleDown() {
    this.input();
    this.down();
  }

  handleUp() {
    this.up();
  }

  protected input() {
    // this.onInput(this.data);
    const state = this.state;
    state.data = { ...state.data, content: state.data.content + this.data };
  }

  protected down() {
    this.node.classList.add('keyboard__key-down');
  }

  protected up() {
    this.node.classList.remove('keyboard__key-down');
  }

  setData(data: string) {
    this.data = data;
    this.node.textContent = data;
  }
}

export default Key;
