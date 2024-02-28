const sortArray = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  const stack: any = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
  }
  return arr
};
console.log(sortArray([100, 200, 90, 400]));
