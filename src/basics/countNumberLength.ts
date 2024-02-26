const countNumberLengthWithoutConvertingInString = (num: number) => {
  let count = 0;
  while (num >=1) {
    num = num / 10;
    count++;
  }
  return count;
};


const number=111111111
console.log(countNumberLengthWithoutConvertingInString(number))