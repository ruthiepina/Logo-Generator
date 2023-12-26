const Triangle = require("../lib/Triangle.js");
const Square = require("../lib/Square.js");
const Circle = require("../lib/Circle.js");

function createShapeObject(answers) {
   let shapeObject = "";
   switch (answers.shapeType) {
      case "Circle":
         shapeObject = new Circle(answers.shapeColor, answers.textColor, answers.shapeText);
         break;
      case "Square":
         shapeObject = new Square(answers.shapeColor, answers.textColor, answers.shapeText);
         break;
      case "Triangle":
         shapeObject = new Triangle(answers.shapeColor, answers.textColor, answers.shapeText);
         break;
      default:
   }
   return shapeObject;
}

module.exports = createShapeObject;
