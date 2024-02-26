

const reduceFunction = (a: number, b: number, ...rest: number[]) => {
    return a + b + rest.reduce((a, b) => a + b, 0)
}

console.log(reduceFunction(10, 30, 10))

const reduceFunctionArray = (arr:number[]) => {
    return  arr.reduce((total, current) => total + current, 10)  // last value is initial value i.e total value is initial in start
}

console.log(reduceFunctionArray([10, 30, 10]))
