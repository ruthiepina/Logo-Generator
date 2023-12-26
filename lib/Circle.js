const Shape = require("./Shape");

class Circle extends Shape {
   constructor(shapeColor, textColor, shapeText) {
      super(shapeColor, textColor, shapeText);
   }
   render() {
      return `circle cx="150" cy="100" r="100"`;
   }
}

module.exports = Circle;
