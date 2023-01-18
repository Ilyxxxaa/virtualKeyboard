import Control from './common/control';
import Board from './board';
import Output from './output';

const board = {
  Digit1: '1',
  Digit2: '2',
};

const boardEn = {
  Digit1: 'a',
  Digit2: 'b',
};

class Keyboard extends Control {
  private board: Board;
  private output: Output;

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.output = new Output(this.node);
    this.board = new Board(this.node, board, (char) => {
      this.output.content += char;
    });

    document.addEventListener('keydown', (e) => {
      console.log(e.code);
      this.board.handleDown(e.code);
    });

    document.addEventListener('keyup', (e) => {
      console.log(e.code);
      this.board.handleUp(e.code);
    });
  }
}

export default Keyboard;
