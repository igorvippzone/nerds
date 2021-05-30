const ball = document.querySelector("p");
const counter = document.querySelector(".counter");
const btnUp = document.querySelector(".up");
const btnDown = document.querySelector(".down");
let size = 20;
console.log(counter);
counter.textContent = size;

ball.style.fontSize = size + "px";

const changeSize = (event) => {
  if (event.key === "ArrowUp") {
    size += 2;
    ball.style.fontSize = size + "px";
    counter.textContent = size;
    event.preventDefault();
    if (size >= 200) {
      ball.textContent = "💥";
      counter.textContent = "Бада-Бум";
      window.removeEventListener("keydown", changeSize);
    }
  }
  if (event.key === "ArrowDown") {
    if (size > 20) {
      size -= 2;
    }
    ball.style.fontSize = size + "px";
    counter.textContent = size;
    event.preventDefault();
  }
};
// btnUp.addEventListener('mousedown',(event)=>{
//   size += 2;
//     ball.style.fontSize = size + "px";
//     counter.textContent = size;
//     event.preventDefault();
//     if (size >= 200) {
//       ball.textContent = "💥";
//       counter.textContent = "Бада-Бум";
//       btnUp.removeEventListener("mousedown", (event)=>{});
//       btnDown.removeEventListener("mousedown", (event)=>{});
//     }
// })
// btnDown.addEventListener('mousedown', (event)=>{
//   if (size > 20) {
//     size -= 2;
//   }
//   ball.style.fontSize = size + "px";
//   counter.textContent = size;
//   event.preventDefault();
// })

window.addEventListener("keydown", changeSize);
