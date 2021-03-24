// class Calculator {
//   constructor(display) {
//     this.display = display;
//   }

//   clear() {
//     this.display = "";
//   }

//   delete() {}

//   appendNumber(number) {
//     this.display = number;
//   }

//   chooseOperation(operator) {}

//   compute() {}

//   updateDisplay() {
//     this.display.innerText = this.display;
//   }
// }

const allClear = document.getElementById("AC");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const operators = document.querySelectorAll(".box__operator");
const buttonNumber = document.querySelectorAll(".box__number");
const display = document.querySelector(".box__display");
const displayResult = document.querySelector(".box__result");

const clear = () => {
  displayResult = "";
};

const displayNumbers = () => {
  buttonNumber.forEach((button) => {
    button.addEventListener("click", (e) => {
      displayResult.append(e.target.value);
    });
  });
};

const run = () => {
  displayNumbers();
};

run();
