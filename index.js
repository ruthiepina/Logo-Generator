const inquirerPrompts = require("./utils/inquirerPrompts.js");
const generateSVG = require("./utils/generateSVG.js");
const writeToFile = require("./utils/writeToFile.js");

const fileName = "./assets/logo.svg";

const init = async () => {
   const answers = await inquirerPrompts();

   const fileData = await generateSVG(answers);

   writeToFile(fileName, fileData);
};

init();
