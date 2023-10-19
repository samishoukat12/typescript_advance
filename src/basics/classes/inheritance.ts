interface square {
    getArea?: () => number
}
abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class split extends Polygon{
    public constructor(protected width:string){
        super();
    }

    public getArea(): number {
        return 10
    }
}
class Rectangle implements square {
    public constructor(protected height: number, protected width: number) {
        console.log("i am constructor", height, width)
    }
    public getArea(): number {
        console.log("i am super class", this.height, this.width)
        return Number(this.width) * Number(this.height);
    }
}

class NewRectangle extends Rectangle {
    public constructor(protected width: number) {
        super(width, 20)
    }
    public getArea(): number {
        console.log("i am sub class", super.getArea())
        return super.getArea()
    }
    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}


class NewRectagle2 extends NewRectangle {
    public constructor(protected width: number) {
        super(width)
    }
    public getArea(): number {
        console.log('i am sub child 2')
        return super.getArea()
    }
    public override toString(): string {
        return `Rectangle[wid=${this.width}, het=${this.height}]`;
    }
}
const superClass = new NewRectagle2(40)

const properties = {
    width: 20,
    height: 20
}

superClass.getArea.call(properties)





// An abstract class is like a blueprint for other classes.
// It can have some methods that other classes must provide (marked as "abstract").
// When you create a class based on this blueprint, you have to fill in the missing parts by implementing those methods.