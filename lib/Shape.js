class Shape {
   constructor(shapeColor, textColor, shapeText) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.shapeText = shapeText;
   }
   getShapeColor() {
      //* reading shapeColor property
      return this.shapeColor;
   }
   setShapeColor(shapeColor) {
      //* setting the value of the shapeColor property
      this.shapeColor = shapeColor;
   }
   getTextColor() {
      //* reading textColor property
      return this.textColor;
   }
   setTextColor(textColor) {
      //* setting the value of the textColor property
      this.textColor = textColor;
   }
   getShapeText() {
      //* reading textColor property
      return this.shapeText;
   }
   setShapeText(shapeText) {
      //* setting the value of the textColor property
      this.shapeText = shapeText;
   }
   render(shapeColor) {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
   }
}

module.exports = Shape;
