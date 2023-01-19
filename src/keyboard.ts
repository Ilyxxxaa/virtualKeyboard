import Control from './common/control';
import Board from './board';
import Output from './output';
import { board } from './common/langs';
import { boardEn } from './common/langs';

class Keyboard extends Control {
  private board: Board;
  private output: Output;
  private languages = [board, boardEn];
  private langIndex = 0;

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.output = new Output(this.node);
    this.board = new Board(this.node, this.languages[this.langIndex], (char) => {
      this.output.content += char;
    });
    this.board.onNextLanguage = () => {
      this.langIndex = (this.langIndex + 1) % this.languages.length;
      this.board.setLanguage(this.languages[this.langIndex]);
    };

    this.board.onBackspace = () => {
      this.output.content = this.output.content.slice(0, -1);
    };

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
