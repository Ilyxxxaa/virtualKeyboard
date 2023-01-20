import Control from './common/control';

class Output extends Control {
  // private _content: string;

  set content(value: string) {
    // this._content = value;
    console.log(this.node);
    (this.node as HTMLTextAreaElement).value = value;
    console.dir(this.node);
  }

  // get content() {
  //   return this._content;
  // }

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'textarea', 'keyboard__output');
    // this._content = '';
  }
}

export default Output;
