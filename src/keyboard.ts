import Control from './common/control';
import Board from './board';
import Output from './output';
// import { board } from './common/langs';
// import { boardEn } from './common/langs';
import KeyboardState, { IKeyboardData } from './keyboardState';
import layout from './langs/layout';

class Keyboard extends Control {
  private board: Board;
  private output: Output;

  // private langIndex = 0;

  constructor(parentNode: HTMLElement, state: KeyboardState) {
    super(parentNode);
    const update = (data: IKeyboardData) => {
      this.output.content = data.content;
      const currentBoard = state.languages[data.langIndex];
      if (data.shift) {
        this.board.setLanguage(currentBoard.shift);
        console.log('Перестроилось на шифт');
      }
      if (data.caps) {
        this.board.setLanguage(currentBoard.caps);
        console.log('Перестроилось на капс');
      }
      if (!data.caps && !data.shift) {
        this.board.setLanguage(currentBoard.base);
        console.log('Перестроилось на обычный');
      }
    };
    state.onChange.add(update);
    this.output = new Output(this.node);
    this.board = new Board(this.node, layout, state);

    // this.board.onNextLanguage = () => {
    //   this.langIndex = (this.langIndex + 1) % this.languages.length;
    //   this.board.setLanguage(this.languages[this.langIndex]);
    // };

    // this.board.onBackspace = () => {
    //   this.output.content = this.output.content.slice(0, -1);
    // };

    document.addEventListener('keydown', (e) => {
      console.log(e.code);
      this.board.handleDown(e.code);
    });

    document.addEventListener('keyup', (e) => {
      console.log(e.code);
      this.board.handleUp(e.code);
    });

    update(state.data);
  }
}

export default Keyboard;
