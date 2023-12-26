const Shape = require("./Shape.js");
class Triangle extends Shape {
   constructor(shapeColor, textColor, shapeText) {
      super(shapeColor, textColor, shapeText);
   }
   //* Polymorphism for render method
   render() {
      return `polygon points="150, 18 244, 182 56, 182"`;
   }
}

module.exports = Triangle;
