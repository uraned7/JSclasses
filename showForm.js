export default class showForm{
    content;

    constructor(){
        this.content = document.querySelector("#content")
    }

    getInputText(){
      this.content.innerHTML += `<input type=text id=radius>`;
    }
    getButton(){
        this.content.innerHTML += `<input type=button id=btn>`;
    }
}