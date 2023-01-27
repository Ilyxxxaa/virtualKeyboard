import Control from './common/control';

class Output extends Control {
  set content(value: string) {
    (this.node as HTMLTextAreaElement).value = value;
  }

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'textarea', 'keyboard__output');
  }
}

export default Output;
