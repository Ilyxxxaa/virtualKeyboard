import Control from './common/control';

class Output extends Control {
  // private _content: string;

  set content(value: string) {
    // this._content = value;
    this.node.textContent = value;
  }

  // get content() {
  //   return this._content;
  // }

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    // this._content = '';
  }
}

export default Output;
