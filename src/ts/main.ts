const numberButtons = document.querySelectorAll(".box__number");
const operationButtons = document.querySelectorAll(".box__operator");
const equalsButton = document.querySelector("#equal");
const deleteButton = document.querySelector("#reset");
const allClearButton = document.querySelector("#AC");
const previousOperandTextElement = document.querySelector(".box__previousNum");

let currentOperand: string = "";
let previousOperand: string = "";
let operation = undefined;

const clear = (): void => {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
};
