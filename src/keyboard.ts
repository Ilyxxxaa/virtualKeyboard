import Control from './common/control';
import Board from './board';
import Output from './output';
import KeyboardState, { IKeyboardData } from './keyboardState';
import { descr } from './description';
import layout from './langs/layout';

class Keyboard extends Control {
  private board: Board;
  private output: Output;

  constructor(parentNode: HTMLElement, state: KeyboardState) {
    super(parentNode, 'div', 'keyboard', descr);
    const update = (data: IKeyboardData) => {
      this.output.content = data.content;
      const currentBoard = state.languages[data.langIndex];
      if (data.shift) {
        this.board.setLanguage(currentBoard.shift);
      }
      if (data.caps) {
        this.board.setLanguage(currentBoard.caps);
      }
      if (!data.caps && !data.shift) {
        this.board.setLanguage(currentBoard.base);
      }
    };
    state.onChange.add(update);
    this.output = new Output(this.node);
    this.board = new Board(this.node, layout, state);

    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      this.board.handleDown(e.code);
    });

    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      this.board.handleUp(e.code);
      this.output.node.focus();
    });

    document.addEventListener('keydown', (e) => {
      if (e.shiftKey && e.altKey) {
        state.data = {
          ...state.data,
          langIndex: (state.data.langIndex + 1) % state.languages.length,
        };
      }
    });

    update(state.data);
  }
}

export default Keyboard;
