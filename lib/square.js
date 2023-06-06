const Shape = require("./shape");

class square extends Shape {
  constructor(logoName, textColor, logoColor) {
    super();
    this.logoName = logoName;
    this.textColor = textColor;
    this.logoColor = logoColor;
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="100" fill="${this.logoColor}" />
    <text x="150" y="105" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>
    </svg>`;
  }
}

module.exports = square;
