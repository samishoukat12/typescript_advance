const checkIsPalindrome=(str:string)=>{
    return str.split("").reverse().join("")===str
}


console.log(checkIsPalindrome("radar"))