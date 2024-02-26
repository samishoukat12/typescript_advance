const findmaximum = (arr: number[]) => {
  let max = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findmaximum([2, 1, 7, 4, 96, 34, 22]));
