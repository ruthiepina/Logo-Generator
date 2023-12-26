const fs = require("fs");

function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, "utf8", (err) => {
      if (err) {
         console.log("Error writing the file.", err);
      } else {
         console.log("Generated logo.svg file.");
      }
   });
   return;
}

module.exports = writeToFile;