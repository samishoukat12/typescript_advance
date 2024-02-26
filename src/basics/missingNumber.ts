const findMissingNumber = (arr: number[]): number | undefined => {
    const n = arr.length + 1;
    const expectedSum = (n * (n - 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
    const missingNumber = expectedSum - actualSum;
  
    return missingNumber !== 0 ? missingNumber : undefined;
  };
  
  // Example usage:
  console.log(findMissingNumber([0, 1, 3, 4, 5]));  // Output: 2