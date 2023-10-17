function test(this: any) {
    console.log(this.name)
}

const obj1 = {
    name: 'test'
}
test.call(obj1)