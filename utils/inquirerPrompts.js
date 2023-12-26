const inquirer = require("inquirer");

let shapeType = ["Circle", "Triangle", "Square"];

const appIntro = `
---------------------------------------------
Welcome to the SVG file generator
---------------------------------------------


Instructions:

1. Understand what each prompt is asking you.
2. Some prompts will ask you to enter a color keyword or hexadecimal number. 
a. Visit https://www.w3.org/wiki/CSS/Properties/color/keywords for a full list of supported CSS color keywords and hexadecimal numbers.
3. Use the arrow keys to select from the shape type list.
4. Press enter after every input.
Your answer will be then automatically received by the application.

Enjoy it!

`;
const questions = [
   {
      type: "input",
      name: "logoText",
      message: "Enter up to 3 characters for your logo text.",
   },
   {
      type: "input",
      name: "textColor",
      message: "Enter a color keyword (OR a hexadecimal number) for your logo text color selection.",
   },
   {
      type: "list",
      name: "shape",
      message: "Select the shape for your logo.",
      choices: shapeType,
   },
   {
      type: "input",
      name: "shapeColor",
      message: "Enter a color keyword (OR a hexadecimal number) for your logo shape color selection.",
   },
];
const inquirerPrompts = async () => {
   console.log(appIntro);
   return await inquirer.prompt(questions);
};

module.exports = inquirerPrompts;
