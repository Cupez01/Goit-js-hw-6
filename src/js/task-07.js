const indicator = document.querySelector("#font-size-control");
const letters = document.querySelector("#text")

indicator.addEventListener("input", sizeText);

function sizeText(event) {
  letters.style.fontSize = `${event.target.value}px`;
}