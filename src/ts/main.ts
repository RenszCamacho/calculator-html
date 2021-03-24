const AC = document.getElementById("AC");
const reset = document.getElementById("reset");
const division = document.getElementById("division");
const multiplier = document.getElementById("multiplier");
const substraction = document.getElementById("substraction");
const add = document.getElementById("add");
const equal = document.getElementById("equal");
const comma = document.getElementById("comma");
const numbers = document.querySelectorAll(".box__number");

numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
  })
);
