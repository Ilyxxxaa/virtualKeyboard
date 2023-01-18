import Control from '../common/control';

class Key extends Control {
  onInput: (char: string) => void;
  private data: string;

  constructor(parentNode: HTMLElement, data: string, onInput: (char: string) => void) {
    super(parentNode);
    this.node.textContent = data;
    this.data = data;
    this.onInput = onInput;

    this.node.onmousedown = () => {};

    this.node.onmouseup = () => {
      this.input();
    };

    this.node.onmouseenter = () => {};

    this.node.onmouseleave = () => {};
  }

  handleDown() {
    this.input();
  }

  handleUp() {}

  protected input() {
    this.onInput(this.data);
  }

  setData(data: string) {
    this.data = data;
    this.node.textContent = data;
  }
}

export default Key;
