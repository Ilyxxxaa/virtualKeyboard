import KeyboardState from './keyboardState';
import Keyboard from './keyboard';
import KeyboardData from './keyboardData';
import './style.scss';

const defaultData = {
  content: '',
  langIndex: 0,
  shift: false,
  caps: false,
};

let data: KeyboardData;
try {
  data = KeyboardData.load();
} catch (e) {
  data = new KeyboardData(defaultData);
}

const state = new KeyboardState(data);
const keyboard = new Keyboard(document.body, state);

(window as any).keyboard = keyboard;

window.onbeforeunload = () => {
  new KeyboardData(state.data).save();
};
