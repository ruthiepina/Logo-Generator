const inquirerPrompts = require("./utils/inquirerPrompts.js");
const generateSVG = require("./utils/generateSVG.js");
const writeToFile = require("./utils/writeToFile.js");
const createShapeObject = require("./utils/createShapeObject.js");

const fileName = "./assets/logo.svg";

const init = async () => {
   const answers = await inquirerPrompts();
   const shapeObject = createShapeObject(answers);
   const fileData = await generateSVG(shapeObject);

   writeToFile(fileName, fileData);
};

init();
