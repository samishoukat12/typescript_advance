class visibilityClass {
    // private name: string | undefined;
    private id: number | undefined;
    public constructor(private readonly name: string) {   //call automatically
        this.name = name;
        this.id = 0
    }
    public myName(): string | void {    //void data type does not return anything
        console.log("my name", this.name,this.id)
        return this.name
    }
}


const classCall = new visibilityClass("sami")
const obj = {
    name: "sami123",
    id: 1
}
console.log(classCall.myName.call(obj))