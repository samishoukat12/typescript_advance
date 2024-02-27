const reverseArray = (arr: number[] | any) => {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      stack.push(arr[i]);
    }
    console.log(stack)
    for (let j = 0; j < arr.length; j++) {
      arr[j] = stack.pop();
    }
    return arr
  };
  
  console.log(reverseArray([10,20,30]))
  