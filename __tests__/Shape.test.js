const Shape = require("../lib/Shape.js");

test("creates a Shape object", () => {
   const shape = new Shape("green", "blue");
   expect(shape.getShapeColor()).toBe("green");
   shape.setShapeColor("blue");
   expect(shape.getShapeColor()).toBe("blue");
   expect(shape.render("blue")).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
   expect(shape.getTextColor()).toBe("blue");
   shape.setTextColor("red");
   expect(shape.getTextColor()).toBe("red");
});
