export const appendNumber = (
  number: number | string,
  currentDis: number | string
): string => {
  currentDis = currentDis.toString();
  number = number.toString();
  if (number === "," && currentDis.includes(",")) return;
  return currentDis + number;
};
