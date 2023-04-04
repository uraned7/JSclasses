export default class Circle {
    #radius

    constructor(radius){
        this.#radius = radius;
    }

    setRadius(radius){
        this.#radius = radius;
    }
    Radius(){
        return this.#radius;
    }
    Area(){
        return Math.PI * Math.pow(this.#radius, 2);
    }
    Circumference(){
        return 2*Math.PI * (2 *this.#radius);
    }

    show(){
        console.log("Радиус круга - " + this.#radius + "; площадь круга - " + this.Area() + "; получить длину окружности круга - " + this.Circumference())
    }
}