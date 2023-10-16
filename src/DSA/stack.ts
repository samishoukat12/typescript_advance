const arr: number[] = new Array(4).fill(0); // Initialize the array with zeros
let TOP = -1; // Initialize TOP as -1

function PUSH(val: number) {
    if (TOP === arr.length - 1) {
        console.log("Stack is full. Cannot push more elements.");
        return;
    }

    TOP++;
    arr[TOP] = val;
    return arr;
}

function POP() {
    if (TOP === -1) {
        console.log("Stack is empty. Nothing to pop.");
        return;
    }

    const poppedValue = arr[TOP];
    TOP--;
    return poppedValue;
}

const push1 = PUSH(10);
const push2 = PUSH(20);
const push3 = PUSH(30);
const push4 = PUSH(40);
const push5 = PUSH(50); // This will print "Stack is full. Cannot push more elements."

console.log(push1); // [10]
console.log(push2); // [10, 20]
console.log(push3); // [10, 20, 30]
console.log(push4); // [10, 20, 30, 40]
console.log(push5); // undefined

const pop1 = POP(); // Pop the top element (40)
const pop2 = POP(); // Pop the top element (30)
const pop3 = POP(); // Pop the top element (20)
const pop4 = POP(); // Pop the top element (10)
const pop5 = POP(); // This will print "Stack is empty. Nothing to pop."

console.log(pop1); // 40
console.log(pop2); // 30
console.log(pop3); // 20
console.log(pop4); // 10
console.log(pop5); // undefined
