function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColor = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorValue = document.querySelector('span.color')


buttonColor.addEventListener('click', e => {
  let colors = getRandomHexColor();
  body.style.backgroundColor = colors;
  colorValue.textContent = colors;
})