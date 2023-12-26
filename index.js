const inquirerPrompts = require("./utils/inquirerPrompts.js");

const init = async () => {
    const answers = await inquirerPrompts();
    generateSVG(answers);
};

init();
