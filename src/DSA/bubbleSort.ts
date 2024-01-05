let unsortedArray2: number[] = [-90, 45, 10, -100, 30];

const bubbleSort = (arr: number[]) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const sortedArray1 = bubbleSort(unsortedArray2);
console.log(sortedArray1);
