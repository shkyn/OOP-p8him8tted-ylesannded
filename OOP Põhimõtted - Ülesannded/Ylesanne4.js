
// Klass kujund shape
class Shape {
    constructor(color) {
        this.color = color;
    }
    // Setcolor muudab värvi
    setColor(color) {
        this.color = color;
    }
    // getColor tagastab värvi
    getColor() {
        return this.color;
    }
    // getArea arvutab kujundi pindala ja tagasab selle
    getArea() {
        throw new Error("Circle klassi sisu")
    }
}

// Kujundi alamklass Circle
class Circle {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    // getArea ringi pindala arvutamise: PI * raadius2
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    // print circle tagastamine
    print() {
        return `Circle (r: ${this.radius}, color: ${this.getColor()})`;
    }
}

// Kujund alamklass square mis laiendab Shape
class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }
    // getArea pindala arvutamine side * side
    getArea() {
        return this.side ** 2
    }
    // print tagastab square
    print() {
        return `Square (a: ${this.side}, color: ${this.getColor()})`
    }
}

// kujund alamklass rectangle
class Rectangle extends Square {
    constructor(color, length, width) {
        super(color)
        this.length = length
        this.width = width
    }
    // getArea pindala = length * this.width
    getArea() {
        return this.length * this.width
    }
    // print tagastab rectangle
    print() {
        return `Rectangle (l: ${this.length}, w: ${this.width}, color: ${this.getColor()})`
    }
}

// Paint meetod

class Paint {
    // kujundite massiiv
    constructor() {
        this.shapes = []
    }
    // addShape kujundi massiiv
    addShape(shape) {
        this.shape.push(shape)
    }
    // getShape tagastab kujundite massiivi
    getShapes() {
        return this.shapes
    }
    //calculateTotalArea() arvutab pindala summa
    calculateTotalArea() {
        return this.shapes.reduce((total, shape) => total + shape.getArea(), 0)
    }
    // getCircles, getSquares, getRectangles massiivi tagastamine
    getCircles() {
        return this.shapes.filter(shape => shape instanceof Circle)
    }
    getSquares() {
        return this.shapes.filter(shape => shape instanceof Square)
    }
    getRectangles() {
        return this.shapes.filter(shape => shape instanceof Rectangle)
    }
}