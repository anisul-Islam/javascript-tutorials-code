// load, unload,
// scroll
// resize
// toggle - details

// window.addEventListener("load", function () {
//   console.log("load");
// });
// window.addEventListener("unload", function () {
//   console.log("unload");
// });

// window.addEventListener("scroll", function () {
//   console.log("scroll");
// });

// window.addEventListener("resize", function () {
//   const width = window.outerWidth;
//   const height = window.outerHeight;
//   console.log(`height: ${height}, width: ${width}`);
// });

const details = document.querySelector("details");

details.addEventListener("toggle", function (e) {
  console.log(e.target.open);
});
