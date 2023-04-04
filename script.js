"use strict";

import Circle from "./Circle.js";
import Rectangle from "./Rectangle.js";
import Text from "./Text.js";
import showForm from "./showForm.js";

let circle = new Circle(10);
circle.show();

let rectangle = new Rectangle(10,15);
console.log(rectangle.Ratio());

let text = new Text("Жил был ежик");
console.log(text.length());

let showform = new showForm();

showform.getInputText();
showform.getButton();


