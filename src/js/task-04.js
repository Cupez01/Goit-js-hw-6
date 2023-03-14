"use strict";
let value = document.querySelector('#value')
const increase = document.querySelector('button[data-action = "increment"]')
const decrease = document.querySelector('button[data-action = "decrement"]')
let counterValue = 0;


const increaseValue = () => {
  value.textContent= ++counterValue;
}
const decreaseValue = ()  => {
  value.textContent= --counterValue;
}
increase.addEventListener("click", increaseValue);
decrease.addEventListener("click", decreaseValue);
