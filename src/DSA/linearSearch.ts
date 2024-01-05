const searchArray = [10, 30, 20, 0, -2];
// let checkNumber: number;
// for (let i = 0; i < searchArray.length; i++) {
//   if (searchArray[i] == 20) {
//     checkNumber=1
//   }
//   else{
//     checkNumber=0
//   }
// }

// if(checkNumber=0){
//     console.log("The number is not in the array");
// }
// else{
//     let index = searchArray.indexOf(20);
//     console.log(`The number ${searchArray[index]} is at position ${index+1}`)
// }
const searchResult = searchArray.find((item) => {
  if (item == 80) {
    return true;
  }
});
console.log(searchResult ? "number found" : "not found");
