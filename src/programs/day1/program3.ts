// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = (nums: number[]): boolean => {
  //1
  //   JSON.stringify(nums) !== JSON.stringify([...new Set<number>(nums)]);
  //2
    const seen = new Set<number>();

    for (const num of nums) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }

    return false;
  //3
//   let i: number;
//   let newArray = nums.sort();
//   for (i = 0; i < newArray.length-1; i++) {
//     if (newArray[i] == newArray[i + 1]) {
//       return true;
//     }
//   }
//   return false;
};

console.log(containsDuplicate([1,2,3,1]));
