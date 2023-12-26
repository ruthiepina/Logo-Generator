const Shape = require("./Shape.js");
class Triangle extends Shape {
   constructor(shapeColor, textColor, shapeText) {
      super(shapeColor, textColor, shapeText);
   }
   //* Polymorphism for render method
   render() {
      return `polygon points="150, 0 250, 200 50, 200"`;
   }
}

module.exports = Triangle;
