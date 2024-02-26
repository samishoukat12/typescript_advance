const anagram = (str1: string, str2: string) => {
  const planeString1 = str1.split("").sort().join("");
  const planeString2 = str2.split("").sort().join("");
  return planeString1 === planeString2;
};


console.log(anagram("listen","silent"));