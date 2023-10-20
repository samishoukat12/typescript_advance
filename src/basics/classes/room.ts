interface roomProps {
    getArea: () => number
}


class Room implements roomProps {
    public constructor(protected width: number, protected height: number, protected color: string) {
        this.width = width
        this.height = height
        this.color = color
    }
    getArea(): number {
        return this.height * this.width
    }

}

class Material extends Room {
    public constructor(private chairs: number, private boards: number) {
        super(30, 30, 'cream')
    }

    public roomMaterial(): string {
        return `there are ${this.chairs} chairs and ${this.boards} boards in class and area of room is ${this.getArea()} color of room is ${this.color}`
    }
}


const roomClass = new Material(100, 4)

const getRoomMaterial = (): string => {
    const area = roomClass.roomMaterial()
    console.log(area)
    return area
}

getRoomMaterial()