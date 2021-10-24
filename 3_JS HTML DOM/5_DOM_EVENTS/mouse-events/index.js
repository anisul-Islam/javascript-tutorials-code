// MouseEvent - <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>
// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmousedup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover

console.clear();
const div = document.querySelector("div");

div.addEventListener("click", function (e) {
  //   console.log("click is occured");
  //   console.log(e.target);
  //   console.log(e.target.id);
  //   console.log(e.target.className);
  //   console.log(e.target.innerHTML);
  //   console.log(e.target.innerText);
  //   console.log(e.target.textContent);
});

// div.addEventListener("dblclick", function () {
//   console.log("dblclick is occured");
// });
// div.addEventListener("mousedown", function () {
//   console.log("mousedown is occured");
// });
// div.addEventListener("mouseup", function () {
//   console.log("mouseup is occured");
// });
// div.addEventListener("mouseenter", function () {
//   console.log("mouseenter is occured");
// });
// div.addEventListener("mouseleave", function () {
//   console.log("mouseleave is occured");
// });
// div.addEventListener("mouseover", function () {
//   console.log("mouseover is occured");
// });
// div.addEventListener("mousemove", function (e) {
//   //   console.log("mousemove is occured");
//   //   console.log("clientX = " + e.clientX + ", clientY = " + e.clientY);
//   console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
// });

const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.innerText);
  });
});
