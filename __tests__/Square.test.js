const Square = require("../lib/Square.js");

test("creates a Square object", () => {
   const square = new Square("green", "blue");
   expect(square.getShapeColor()).toBe("green");
   square.setShapeColor("blue");
   expect(square.getShapeColor()).toBe("blue");
   expect(square.render("blue")).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
   expect(square.getTextColor()).toBe("blue");
   square.setTextColor("red");
   expect(square.getTextColor()).toBe("red");
});

// const Square = new Triangle();
// square.setColor("blue");
// expect(square.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
