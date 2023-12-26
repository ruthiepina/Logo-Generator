const generateSVG = async (logo) => {
   const circleSVG = `circle cx="150" cy="100" r="80"`;
   const squareSVG = `rect width="50" height="50"`;
   const triangleSVG = `polygon points="150, 18 244, 182 56, 182"`;

   let svg = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <${logo.shape === "Circle" ? circleSVG : logo.shape === "Square" ? squareSVG : triangleSVG} fill="${logo.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logo.textColor}">${logo.logoText}</text>
    </svg>`;

   return svg;
};

module.exports = generateSVG;
