// function generics<Type>(arg: Type)=> Type {
//     return arg;
// }
const generics = <Type>(arg: Type): Type => {
    return arg;
}

generics<String>('hello sami')

function clone<T>(obj: T): T {
    console.log(typeof obj)
    return obj
} 1
const obj0 = {
    a: {
        b: 10
    }
}
clone(obj0)


type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };
console.log(wrappedValue)

