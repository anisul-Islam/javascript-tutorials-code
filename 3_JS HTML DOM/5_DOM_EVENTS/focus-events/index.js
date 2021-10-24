// FocusEvent Object
//  <br>, <head>, <title>, <html>, <iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo>,

// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout

const input = document.querySelector("input");
input.addEventListener("blur", function (e) {
  //   console.log(e.target.value);
  input.value = e.target.value.toUpperCase();
});
input.addEventListener("focus", function () {
  //   console.log("focus is occured");
  //   input.style.backgroundColor = "orange";
  //   input.style.padding = "2rem";
});
// input.addEventListener("focusin", function () {
//   console.log("focusin is occured");
// });
// input.addEventListener("focusout", function () {
//   console.log("focusout is occured");
// });
