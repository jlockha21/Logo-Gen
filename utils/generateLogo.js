const square = require("../lib/square");
const circle = require("../lib/circle");
const triangle = require("../lib/triangle");


function generateLogo(data) {
    let shape;
    if (data.logoShape === "square") {
      shape = new square(data.logoName, data.textColor, data.logoColor);
    } else if (data.logoShape === "circle") {
      shape = new circle(data.logoName, data.textColor, data.logoColor);
    } else if (data.logoShape === "triangle") {
      shape = new triangle(data.logoName, data.textColor, data.logoColor);
    }
    return shape.render();
  }
  
module.exports = generateLogo;
