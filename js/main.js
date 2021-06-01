

const openBtn = document.querySelector('.contacts__button')
const popup = document.querySelector('.popup')
console.log(openBtn)
openBtn.addEventListener("click", ()=>{
  popup.classList.remove("hidden")
})
