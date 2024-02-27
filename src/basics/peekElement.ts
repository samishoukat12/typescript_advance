const peekElement = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1];
      arr[arr.length - 1] = temp;
    }
    return [arr[0],arr[arr.length - 1]]
  };
  console.log(peekElement([20,10,40]))
  