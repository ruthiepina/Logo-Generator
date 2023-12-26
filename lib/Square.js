const Shape = require("./Shape.js");

class Square extends Shape {
   constructor(shapeColor, textColor, shapeText) {
      super(shapeColor, textColor, shapeText);
   }
   render() {
      return `rect x="50" width="200" height="200"`;
   }
}

module.exports = Square;
