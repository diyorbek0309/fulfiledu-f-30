const button = document.querySelector("button");
const div = document.querySelector("div");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  div.style.fontSize = "24px";
  div.style.backgroundColor = "green";
});

// div.style.height = "400px";
// div.style.backgroundColor = "green";

// div.style.cssText += "color: red; background-color: green;height: 400px";

// const handleClick = (event) => {
//   event.target.setAttribute("class", "btn");
//   console.log(event.target);
// };

// const mouseDown = () => {
//   console.log("mouseDown");
// };

// const mouseUp = () => {
//   console.log("mouseUp");
// };

// button.onmousedown = mouseDown;
// button.onmouseup = mouseUp;
// button.onclick = handleClick;
// div.onmouseenter = () => {
//   console.log("mouse enter");
// };

// div.onmouseleave = () => {
//   console.log("mouse leave");
// };

// div.onmouseover = () => {
//   console.log("mouse over");
// };

// div.onmouseout = () => {
//   console.log("mouse out");
// };

// button.addEventListener("mousedown", mouseDown);
// button.addEventListener("mouseup", mouseUp);
// button.addEventListener("click", handleClick);

// input.addEventListener("keypress", (event) => {
//   console.log(event.target.value);
// });

// input.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });
