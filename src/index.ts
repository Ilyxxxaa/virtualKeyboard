import KeyboardState from './keyboardState';
import Keyboard from './keyboard';

const state = new KeyboardState({
  content: '',
  langIndex: 0,
});

const keyboard = new Keyboard(document.body, state);

(window as any).keyboard = keyboard;
