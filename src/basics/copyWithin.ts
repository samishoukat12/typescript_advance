const copyIn=(arr:string[] | number[])=>{
    return arr.copyWithin(2,0,2)
}

console.log(copyIn([1,2,3,4,5]))