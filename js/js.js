'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const a = getRandomInt(6, 9);
const sum = getRandomInt(11, 14);
const b = sum - a;

console.log(`${a} + ${b} = ${sum}`);

const firstNumber = document.querySelector('.number-label_1');
const secondNumber = document.querySelector('.number-label_2');
const container = document.querySelector('.bottom__container');

firstNumber.innerHTML = a;
secondNumber.innerHTML = b;

function start() {
  let line = document.createElement('div');
  line.classList.add('line');
  line.classList.add(`line_${a}`);
  let radius = document.createElement('div');
  radius.classList.add('radius');
  line.appendChild(radius);
  let inputA = document.createElement('input');
  inputA.classList.add('number');
  inputA.addEventListener('input', function (evt) {
    if (a != evt.target.value) {
      firstNumber.classList.add('number-label_error');
      this.classList.add('number_input-error');
    }
    else {
      firstNumber.classList.remove('number-label_error');
      this.classList.remove('number_input-error');
      this.setAttribute('disabled', '');
      this.classList.add('number-label_validate');
      second();
    }
  })
  line.appendChild(inputA);
  container.appendChild(line);
  inputA.focus();

}

function second() {
  let line = document.createElement('div');
  line.classList.add('line');
  line.classList.add(`line_${b}`);
  let radius = document.createElement('div');
  radius.classList.add('radius');
  line.appendChild(radius);
  let inputB = document.createElement('input');
  inputB.classList.add('number');
  inputB.addEventListener('input', function (evt) {
    if (b != evt.target.value) {
      secondNumber.classList.add('number-label_error');
      this.classList.add('number_input-error');
    }
    else {
      secondNumber.classList.remove('number-label_error');
      this.classList.remove('number_input-error');
      this.setAttribute('disabled', '');
      this.classList.add('number-label_validate');
      finish();
    }
  })
  line.appendChild(inputB);
  container.appendChild(line);
  inputB.focus();
}

function finish() {
  let container = document.querySelector('.number-label_question');
  container.innerHTML = '';
  let input = document.createElement('input');
  input.classList.add('number');
  input.classList.add('number_big');
  input.addEventListener('input', function (evt) {
  let result = setTimeout(() => {
    clearTimeout(result);
    if (sum != evt.target.value) {
      this.classList.add('number_input-error');
    }
    else {
      this.classList.remove('number_input-error');
      this.setAttribute('disabled', '');
      this.classList.add('number-label_validate');
    }
  }, 2000)
  })
  container.appendChild(input);
  input.focus();
}

setTimeout(start, 2000);