const openBtn = document.querySelector(".contacts__button");
const popup = document.querySelector(".popup");
const close = document.querySelector(".write__close");
const body = document.querySelector("body");

openBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.add("visible");

  console.log(e);
  openBtn.setAttribute("disabled", "disabled");
  openBtn.style.cursor = "default";
});
close.addEventListener("click", () => {
  popup.classList.remove("visible");
});

body.addEventListener("click", (e) => {
  console.log(e);
  const active = document.querySelector(".popup.visible");
  if (active && e.target !== active && !active.contains(e.target)) {
    popup.classList.remove("visible");
    openBtn.removeAttribute("disabled", "disabled");
    openBtn.style.cursor = "pointer";
  }
});
