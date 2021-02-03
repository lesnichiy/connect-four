export const addZero = (num) => {
  return ((parseInt(num, 10) < 10) ? '0' : '') + num;
};