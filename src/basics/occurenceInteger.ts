const occurenceInteger = (arr: any[]) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        count++;
      }
    }
    return count
  };
  
  console.log(occurenceInteger([10,20,"test"]))