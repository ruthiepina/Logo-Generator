const Circle = require("../lib/Circle.js");

test("creates a Circle object", () => {
   const circle = new Circle("green", "blue");
   expect(circle.getShapeColor()).toBe("green");
   circle.setShapeColor("blue");
   expect(circle.getShapeColor()).toBe("blue");
   expect(circle.render("blue")).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
   expect(circle.getTextColor()).toBe("blue");
   circle.setTextColor("red");
   expect(circle.getTextColor()).toBe("red");
});

// const circle = new Triangle();
// circle.setColor("blue");
// expect(circle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
