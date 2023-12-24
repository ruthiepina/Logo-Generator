const Circle = require("../lib/Circle.js");

test("creates a Circle object", () => {
   const circle = new Circle("green");
   expect(circle.getColor()).toBe("green");
   circle.setColor("blue");
   expect(circle.getColor()).toBe("blue");
   expect(circle.render("blue")).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
