const Triangle = require("../lib/Triangle.js");

test("creates a Triangle object", () => {
   const triangle = new Triangle("green", "blue");
   expect(triangle.getShapeColor()).toBe("green");
   triangle.setShapeColor("blue");
   expect(triangle.getShapeColor()).toBe("blue");
   expect(triangle.render("blue")).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
   expect(triangle.getTextColor()).toBe("blue");
   triangle.setTextColor("red");
   expect(triangle.getTextColor()).toBe("red");
});

// const Triangle = new Triangle();
// triangle.setColor("blue");
// expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
