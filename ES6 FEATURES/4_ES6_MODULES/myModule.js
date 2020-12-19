// myMoulde.js is a module contain variable called warningMessage
export let text = 'Hi';

export function getText() {
  return text;
}

export function setText(txt) {
  text = txt;
}


// export {text as message}
// import {text as message} from './myModule.js'