// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

const descendingOrder = (n: number): number => {
  if (n <= 0) {
    console.log("Number cannot be zero or negative");
    return 0;
  } else {
    const num = n.toString();
    const sortedNumber = num
      .split("")
      .sort((a, b) => b.localeCompare(a))
      .join("");
    return +sortedNumber;
  }
};

const result = descendingOrder(123456789);
console.log(result);
