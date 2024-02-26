class Circle {
    constructor(radius = 1.0, color = "Red") 
    {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        return this.radius = radius;   
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        return this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

console.log("========== Circle One ==========")
const circle1 = new Circle();
console.log(circle1); 

console.log("========== Circle Two ==========")
const circle2 = new Circle(2.0);
console.log(circle2); 

console.log("========== Circle Three ==========")
const circle3 = new Circle(2.5, "Green");
console.log(circle3);

console.log("========== Circle Four ==========")
const circle4 = new Circle(); 
console.log("Radius:",circle4.getRadius())
console.log("Color:",circle4.getColor())

console.log("========== Circle Five ==========")
const circle5 = new Circle(3.0, "Blue");
console.log(circle5);
console.log(circle5.toString());
console.log(circle5.getArea().toFixed(2));
console.log(circle5.getCircumference().toFixed(2));

