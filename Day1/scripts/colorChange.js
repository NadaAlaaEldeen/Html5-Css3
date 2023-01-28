let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let pColor = document.querySelector("#change-color-p");
red.addEventListener("input", () => {
  pColor.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
});
green.addEventListener("input", () => {
  pColor.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
});
blue.addEventListener("input", () => {
  pColor.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
});
