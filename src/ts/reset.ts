export const deleteCurrent = (currentDis: any): string => {
  currentDis = currentDis.toString().slice(0, -1);
  return currentDis;
};
