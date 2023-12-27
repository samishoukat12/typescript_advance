type callProps = {
  name: string;
};
function test(this: callProps) {
  console.log(this.name);
}

const obj1 = {
  name: "test",
};
test.call(obj1);
