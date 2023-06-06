const Shape = require("./shape");

class Triangle extends Shape {
  constructor(logoName, textColor, logoColor) {
    super();
    this.logoName = logoName;
    this.textColor = textColor;
    this.logoColor = logoColor;
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,50 250,200 50,200" fill="${this.logoColor}" />
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>
    </svg>`;
  }
}

module.exports = Triangle;
