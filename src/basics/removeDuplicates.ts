// const removeDuplicates=(arr:number[])=>{
//     const newArray=new Set(arr)
//     return [...newArray]
// }

// another method

// const removeDuplicates = (arr: number[]) => {
//   const newArray: number[] = [];
//   arr.forEach((item) => {
//     if (!newArray.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// };

// another method

// const removeDuplicates = (arr: number[]) => {
//   let newArray: number[] = [];
//   newArray = arr.filter((item, i) => {
//     return arr.indexOf(item) !== i;
//   });
//   return newArray;
// };



// console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 5]));
