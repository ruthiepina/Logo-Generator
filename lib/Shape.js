class Shape {
   constructor(shapeColor, textColor) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
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
   render(shapeColor) {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
   }
}

module.exports = Shape;
