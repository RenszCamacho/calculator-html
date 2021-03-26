export const getDisplayNumber = (number: number): string => {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split(",")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  let integerDisplay: string;
  if (isNaN(integerDigits)) {
    integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
  }
  if (decimalDigits !== undefined) {
    return `${integerDisplay},${decimalDigits}`;
  } else {
    return integerDisplay;
  }
};
