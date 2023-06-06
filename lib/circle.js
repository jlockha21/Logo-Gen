const Shape = require("./shape");

class Circle extends Shape {
  constructor(logoName, textColor, logoColor) {
    super();
    this.logoName = logoName;
    this.textColor = textColor;
    this.logoColor = logoColor;
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.logoColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>
    </svg>`;
  }
}

module.exports = Circle;
