import "../scss/app.scss";

const collection = [...document.getElementsByClassName("hot")];

for (let i = 0; i <= collection.length; i++) {
  if(collection[i].classList.contains("hot")) {
    collection[i].innerHTML += '🔥';
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});
