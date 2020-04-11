window.onload = () => {

    const divWrapper = document.createElement('div');
    divWrapper.classList.add('wrapper');
    document.querySelector('body').append(divWrapper);
    const textarea = document.createElement('textarea');

    textarea.classList.add('textarea');
    textarea.setAttribute('tabindex', '0');
    document.querySelector('.wrapper').append(textarea);
  
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    document.querySelector('.wrapper').append(keyboard);

    const description = document.createElement('p');
    description.innerHTML = 'Для изменения языка используется ctrl+Alt';    
    document.querySelector('.wrapper').append(description);
  

  
    const buttons = [
      [
        ['Backquote', 'ё', 'Ё', '`', '~'], ['Digit1', '1', '!', '1', '!'], ['Digit2', '2', '"', '2', '@'], ['Digit3', '3', '№', '3', '#'], ['Digit4', '4', ';', '4', '$'],
        ['Digit5', '5', '%', '5', '%'], ['Digit6', '6', ':', '6', '^'], ['Digit7', '7', '?', '7', '&'], ['Digit8', '8', '*', '8', '*'], ['Digit9', '9', '(', '9', '('],
        ['Digit0', '0', ')', '0', ')'], ['Minus', '-', '_', '-', '_'], ['Equal', '=', '+', '=', '+'], ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
      ],
      [
        ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'], ['KeyQ', 'й', 'Й', 'q', 'Q'], ['KeyW', 'ц', 'Ц', 'w', 'W'], ['KeyE', 'у', 'У', 'e', 'E'], ['KeyR', 'к', 'К', 'r', 'R'],
        ['KeyT', 'е', 'Е', 't', 'T'], ['KeyY', 'н', 'Н', 'y', 'Y'], ['KeyU', 'г', 'Г', 'u', 'U'], ['KeyI', 'ш', 'Ш', 'i', 'I'], ['KeyO', 'щ', 'Щ', 'o', 'O'], ['KeyP', 'з', 'З', 'p', 'P'],
        ['BracketLeft', 'х', 'Х', '[', '{'], ['BracketRight', 'ъ', 'Ъ', ']', '}'], ['Backslash', '\\', '/', '\\', '|'], ['Delete', 'Del', 'Del', 'Del', 'Del'],
      ],
      [
        ['CapsLock', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock'], ['KeyA', 'ф', 'Ф', 'a', 'A'], ['KeyS', 'ы', 'Ы', 's', 'S'], ['KeyD', 'в', 'В', 'd', 'D'],
        ['KeyF', 'а', 'А', 'f', 'F'], ['KeyG', 'п', 'П', 'g', 'G'], ['KeyH', 'р', 'Р', 'h', 'H'], ['KeyJ', 'о', 'О', 'j', 'J'], ['KeyK', 'л', 'Л', 'k', 'K'], ['KeyL', 'д', 'Д', 'l', 'L'],
        ['Semicolon', 'ж', 'Ж', ';', ':'], ['Quote', 'э', 'Э', '\'', '\''], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
      ],
      [
        ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'], ['KeyZ', 'я', 'Я', 'z', 'Z'], ['KeyX', 'ч', 'Ч', 'x', 'X'], ['KeyC', 'с', 'С', 'c', 'C'], ['KeyV', 'м', 'М', 'v', 'V'], ['KeyB', 'и', 'И', 'b', 'B'],
        ['KeyN', 'т', 'Т', 'n', 'N'], ['KeyM', 'ь', 'Ь', 'm', 'M'], ['Comma', 'б', 'Б', ',', '<'], ['Period', 'ю', 'Ю', '.', '>'], ['Slash', '.', ',', '/', '?'],
        ['ArrowUp', '↑', '↑', '↑', '↑'], ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
      ],
      [
        ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['MetaLeft', 'Win', 'Win', 'Win', 'Win'], ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'], ['Space', 'Space', 'Space', 'Space', 'Space'],
        ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['ArrowLeft', '←', '←', '←', '←'], ['ArrowDown', '↓', '↓', '↓', '↓'], ['ArrowRight', '→', '→', '→', '→'], ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
      ],
    ];
  
  
    let language = 1;
  
    let capsLockButton = false;
    let ctrlButton = false;
    let altButton = false;
    let shiftButton = false;
  
    let ctrlAltPressed = false;
  
    for (let i = 1; i <= 5; i += 1) {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard-row', `keyboard__row-${i}`);
      document.querySelector('.keyboard').append(keyboardRow);
  
      buttons[i - 1].forEach((button) => {
        const buttonKey = document.createElement('div');
        buttonKey.classList.add('key');
        document.querySelector(`.keyboard__row-${i}`).append(buttonKey);
  
        if (button[0] === 'Backspace' || button[0] === 'CapsLock' || button[0] === 'ShiftLeft' || button[0] === 'ShiftRight' || button[0] === 'Enter') {
          buttonKey.classList.add('key_medium', 'system');
        }
        if (button[0] === 'ControlLeft' || button[0] === 'ControlRight') {
          buttonKey.classList.add('key_small', 'system');
        }
        if (button[0] === 'Space') {
          buttonKey.classList.add('key_big', 'system');
        }
        if (button[0] === 'MetaLeft' || button[0] === 'AltLeft' || button[0] === 'AltRight' || button[0] === 'Delete' || button[0] === 'Tab') {
          buttonKey.classList.add('system');
        }
  
        if (localStorage.getItem('language') === '1') {
          language = 1;
        }
        if (localStorage.getItem('language') === '3') {
          language = 3;
        }
  
        buttonKey.textContent = button[language];
        if (!buttonKey.classList.contains('system')) {
          buttonKey.setAttribute('value', button[language]);
          buttonKey.setAttribute('system-value', button[0]);
        } else {
          buttonKey.setAttribute('value', '');
          buttonKey.setAttribute('system-value', button[0]);
        }
      });
    }
    const circleCapsLock = document.createElement('div');
    circleCapsLock.classList.add('circleCapsLock');
    document.querySelector('.keyboard').append(circleCapsLock);
  
  
    const generateKeyboard = (item, shift) => {
      const buttonMas = document.querySelectorAll('.key');
      const keyB = [];
      for (let i = 1; i <= 5; i += 1) {
        buttons[i - 1].forEach((button) => {
          keyB.push(button);
        });
      }
  
      for (let i = 0; i < 64; i += 1) {
        if (!shift) {
          buttonMas[i].textContent = keyB[i][item];
          if (!buttonMas[i].classList.contains('system')) {
            buttonMas[i].setAttribute('value', keyB[i][item]);
            buttonMas[i].setAttribute('system-value', keyB[i][0]);
          } else {
            buttonMas[i].setAttribute('value', '');
            buttonMas[i].setAttribute('system-value', keyB[i][0]);
          }
        } else {
          buttonMas[i].textContent = keyB[i][item + 1];
          if (!buttonMas[i].classList.contains('system')) {
            buttonMas[i].setAttribute('value', keyB[i][item + 1]);
            buttonMas[i].setAttribute('system-value', keyB[i][0]);
          } else {
            buttonMas[i].setAttribute('value', '');
            buttonMas[i].setAttribute('system-value', keyB[i][0]);
          }
        }
      }
    };
  
  
    const backspaceFunc = () => {
      document.querySelector('.textarea').value = document.querySelector('.textarea').value.slice(0, -1);
    };
    const tabFunc = () => {
      document.querySelector('.textarea').value += '    ';
    };
    const spaceFunc = () => {
      document.querySelector('.textarea').value += ' ';
    };
    const enterFunc = () => {
      document.querySelector('.textarea').value += '\n';
    };
    const deleteFunc = () => {
      const startText = document.querySelector('.textarea').selectionStart;
      const endText = document.querySelector('.textarea').selectionEnd;
      let longText = endText - startText;
      if (startText === endText) {
        longText = 1;
      }
      document.querySelector('.textarea').value = document.querySelector('.textarea').value.slice(0, startText) + document.querySelector('.textarea').value.slice(startText + longText);
      document.querySelector('.textarea').selectionStart = startText;
      document.querySelector('.textarea').selectionEnd = startText;
    };
  
    document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('key')) {
        document.querySelector('.textarea').focus();
  
        event.target.classList.add('active');
        setTimeout(() => { event.target.classList.remove('active'); }, 100);
  
        if (!capsLockButton) {
          document.querySelector('.textarea').value += event.target.getAttribute('value');
        } else {
          document.querySelector('.textarea').value += event.target.getAttribute('value').toUpperCase();
        }
  
        const systemValue = event.target.getAttribute('system-value');
  
        if (systemValue === 'Backspace') {
          backspaceFunc();
        }
        if (systemValue === 'Tab') {
          tabFunc();
        }
        if (systemValue === 'Space') {
          spaceFunc();
        }
        if (systemValue === 'Enter') {
          enterFunc();
        }
        if (systemValue === 'Delete') {
          deleteFunc();
        }
        if (systemValue === 'CapsLock') {
          if (!capsLockButton) {
            document.querySelector('.circleCapsLock').classList.add('capsActive');
            capsLockButton = true;
          } else {
            document.querySelector('.circleCapsLock').classList.remove('capsActive');
            capsLockButton = false;
          }
        }
      }
    });
  
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      document.querySelector('.textarea').focus();
  
      const buttonKey = document.querySelector(`[system-value=${event.code}]`);
  
      buttonKey.classList.add('active');
  
      const systemValue = buttonKey.getAttribute('system-value');
  
      if (!capsLockButton) {
        document.querySelector('.textarea').value += buttonKey.getAttribute('value');
      } else {
        document.querySelector('.textarea').value += buttonKey.getAttribute('value').toUpperCase();
      }
  
      if (systemValue === 'Backspace') {
        backspaceFunc();
      }
      if (systemValue === 'Tab') {
        tabFunc();
      }
      if (systemValue === 'Space') {
        spaceFunc();
      }
      if (systemValue === 'Enter') {
        enterFunc();
      }
      if (systemValue === 'Delete') {
        deleteFunc();
      }
      if (systemValue === 'ShiftLeft') {
        shiftButton = true;
        generateKeyboard(language, shiftButton);
      }
  
      if (systemValue === 'ShiftRight') {
        shiftButton = true;
        generateKeyboard(language, shiftButton);
      }
  
      if (systemValue === 'CapsLock') {
        if (!capsLockButton) {
          document.querySelector('.circleCapsLock').classList.add('capsActive');
          capsLockButton = true;
        } else {
          document.querySelector('.circleCapsLock').classList.remove('capsActive');
          capsLockButton = false;
        }
      }
  
      if (systemValue === 'AltLeft') {
        altButton = true;
      }
      if (systemValue === 'ControlLeft') {
        ctrlButton = true;
      }
  
  
      if (altButton && ctrlButton) {
        if (!ctrlAltPressed) {
          language = 3;
          ctrlAltPressed = true;
        } else {
          language = 1;
          ctrlAltPressed = false;
        }
        localStorage.setItem('language', language);
        generateKeyboard(language, shiftButton);
      }
    });
  
  
    // клавиша клавиутры отжатие
    document.addEventListener('keyup', (event) => {
      const buttonKey = document.querySelector(`[system-value=${event.code}]`); // клавиша по которой тыкнули
      buttonKey.classList.remove('active');
  
      const systemValue = buttonKey.getAttribute('system-value');
  
      if (systemValue === 'AltLeft') {
        altButton = false;
      }
      if (systemValue === 'ControlLeft') {
        ctrlButton = false;
      }
  
      if (systemValue === 'ShiftLeft') {
        shiftButton = false;
        generateKeyboard(language, shiftButton);
      }
      if (systemValue === 'ShiftRight') {
        shiftButton = false;
        generateKeyboard(language, shiftButton);
      }
    });
  };