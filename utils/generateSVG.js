const generateSVG = async (shapeObject) => {
   let svg = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    <${shapeObject.render()} fill="${shapeObject.shapeColor}" />
    <text x="145" y="110" font-size="40" text-anchor="middle" fill="${shapeObject.textColor}">${shapeObject.shapeText}</text>
    </svg>`;

   return svg;
};

module.exports = generateSVG;
