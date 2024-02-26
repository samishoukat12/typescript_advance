const arraySum = (number: number[]) => {
  const squareArr = number.map((num) => num ** 2);
  const sum = squareArr.reduce((acc, cur) => acc + cur, 0);
  return sum;
};
console.log(arraySum([1, 2]));
