

const reduceFunction = (a: number, b: number, ...rest: number[]) => {
    return a + b + rest.reduce((a, b) => a + b, 0)
}

console.log(reduceFunction(10, 30, 10))