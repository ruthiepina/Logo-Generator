class Circle {
   constructor(color) {
      this.color = color;
   }
   getColor() {
      //* reading color property
      return this.color;
   }
   setColor(color) {
      //* setting the value of the color property
      this.color = color;
   }
   render(color) {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
   }
}

module.exports = Circle;
