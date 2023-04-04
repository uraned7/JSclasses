import Circle from "./Circle.js";

export default class showForm{
    content;
    btn;
    fradius;
    rds;
    circle;
    
    constructor(){
        let circle = new Circle(10);
        this.content = document.querySelector("#content");
        this.circle = circle;
    }

    getInputText(){
        this.content.innerHTML += `<input type=text id=radius value=15>`;
    }
    getButton(){
        this.content.innerHTML += `<input type=button id=btn value=Ok>`;
        this.content.innerHTML += `<p>`+ this.circle.Area(); + `</p>`;
        this.content.innerHTML += `<p>`+ this.circle.Circumference(); + `</p>`;
        this.getBtn();


    }


    getRds(){
        console.log("HALP");
        this.fradius = document.querySelector('#radius').value;
        this.circle.setRadius(this.fradius);
        console.log(this.circle.Radius())
    }

    getBtn(){
        this.btn = document.querySelector("#btn")
        this.btn.addEventListener('click',function(){
            console.log('click');
            this.getRds;

        });
    }
}