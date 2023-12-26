const inquirerPrompts = require("./utils/inquirerPrompts.js");

const init = async () => {
   const { answers, shapeTypes } = await inquirerPrompts();
};

init();

