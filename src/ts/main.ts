import { allClear } from "../ts/allClear";
import { deleteCurrent } from "../ts/reset";
import { appendNumber } from "../ts/appendNumber";
import { compute } from "../ts/compute";
import { updateDisplay } from "../ts/updateDisplay";

const buttonNumber = document.querySelectorAll(".box__number");
const buttonOperator = document.querySelectorAll(".box__operator");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");
const AC = document.getElementById("AC");
const previousDisplay = document.querySelector(".box__previousNum");
const currentDisplay = document.querySelector(".box__currentNum");
