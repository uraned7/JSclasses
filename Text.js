export default class Text{
    #text;
    constructor(text){
        this.#text = text;
    }

    length(){
        return this.#text.length;
    }

    
}