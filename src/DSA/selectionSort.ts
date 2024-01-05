let unsortedArray: number[] = [20, 40, 10, 50, 30];

const selectionSort = (arr: number[]) => {
  const n = arr.length;
  //   for (let i = 0; i < n - 1; i++) {
  //     let minIndex = i;
  //     for (let j = i + 1; j < n; j++) {
  //       if (arr[j] < arr[minIndex]) {
  //         minIndex = j;
  //       }
  //     }
  //     let temp = arr[minIndex];
  //     arr[minIndex] = arr[i];
  //     arr[i] = temp;
  //   }
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

const sortedArray: number[] = selectionSort(unsortedArray);
console.log(sortedArray);
