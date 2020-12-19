// myMoulde.js is a module contain variable called warningMessage
export let message = 'Hi';

export function getMessage() {
  return message;
}

export function setMessage(msg) {
  message = msg;
}


// export {message as text}
// import {message as text} from './myModule.js'