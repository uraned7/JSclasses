export default class Rectangle{
#width;
#height;

constructor(width,height){
    this.#width = width;
    this.#height = height;
}

Square(){
    return this.#height * this.#width;
}

Perimeter(){
    return this.#height * 2 + this.#width * 2;
}

Ratio(){
    return this.Square() / this.Perimeter();
}
}