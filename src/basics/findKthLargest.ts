const findKthLargest = (arr: number[] | any, val: number) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    const stack = [];
    for (let k = 0; k < arr.length; k++) {
      stack.push(arr[k]);
    }
  
    for (let m = 0; m < arr.length; m++) {
      arr[m] = stack.pop();
    }
    return arr[val-1];
  };
  
  console.log(findKthLargest([10, 40, 20, 50], 3));
  