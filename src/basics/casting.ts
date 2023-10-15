// 1

let num: unknown = 'hello'

console.log((num as string).length)


// 2

let num1: unknown = 'hello'
console.log(<string>num1)

//force casting

let num2 = 'sami'

console.log(typeof ((num2 as unknown) as number))