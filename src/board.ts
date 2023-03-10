import Control from './common/control';
import KeyboardState from './keyboardState';
import Key from './keys/key';
import KeyBackspace from './keys/keyBackspace';
import KeyLang from './keys/keyLang';
import KeyCapsLock from './keys/keyCapsLock';
import KeyShift from './keys/keyShift';
import KeyAlt from './keys/keyAlt';
import KeySpace from './keys/keySpace';
import KeyTab from './keys/keyTab';
import KeyEnter from './keys/keyEnter';

const classMap: Record<string, typeof Key> = {
  Backspace: KeyBackspace,
  ShiftLeft: KeyShift,
  ShiftRight: KeyShift,
  CapsLock: KeyCapsLock,
  AltRight: KeyAlt,
  AltLeft: KeyAlt,
  Space: KeySpace,
  Tab: KeyTab,
  Lang: KeyLang,
  Enter: KeyEnter,
};

class Board extends Control {
  private keyMap: Record<string, Key> = {};

  constructor(parentNode: HTMLElement, layoutConfig: Array<string[]>, state: KeyboardState) {
    super(parentNode, 'div', 'board');

    layoutConfig.forEach((row) => {
      const rowView = new Control(this.node, 'div', 'keyboard__row');
      row.forEach((keyCode) => {
        const KeyConstructor = classMap[keyCode] || Key;
        const key = new KeyConstructor(rowView.node, keyCode, state, 'key');
        this.keyMap[keyCode] = key;
      });
    });
  }

  setLanguage(boardConfig: Record<string, string>) {
    for (let keyCode in boardConfig) {
      this.keyMap[keyCode].setData(boardConfig[keyCode]);
    }
  }

  handleDown(keyCode: string) {
    const currentKey = this.keyMap[keyCode];

    if (currentKey) {
      currentKey.handleDown();
    }
  }

  handleUp(keyCode: string) {
    const currentKey = this.keyMap[keyCode];

    if (currentKey) {
      currentKey.handleUp();
    }
  }
}

export default Board;
