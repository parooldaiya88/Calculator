class Calculator {
  constructor() {
    //Properties
    this.PI = 3.141592653589793;
    this.E = 2.718281828459045;
  }

  //getter
  
  get pi() {
    return `PI: ${this.PI}`;
  }
  get e() {
    return `Euler's number: ${this.E}`;
  }

  //methods

  ratio(x, y, width) {
    // const height = (ratio_height / ratio_width) * width;
    const height = (y * width)/x;
    return `height is ${height} on ratio: ${x}:${y}`;
  }

  percentage(x, y) {
    return `the percentage of x in y: ${((x / y) * 100).toFixed(2)}`;
  }
  add(x, y) {
    return `the sum of x and y: ${x + y}`;
  }
  substract(x, y) {
    return `the difference of x subtracted from y: ${y - x}`;
  }
  multiply(x, y) {
    return `the product of x multiplied by y: ${x * y}`;
  }
  divide(x, y) {
    if (y === 0) {
      return "Division by 0 is not allowed";
    }
    return `the quotient of x divided by y: ${(x / y).toFixed(2)} `;
  }
  modulation(x, y) {
    if (y === 0) {
      return "Modulation by 0 is not allowed";
    }
    return `the remainder of x divided by y: ${x % y}`;
  }
  elevate(x, y) {
    return `the power of x elevated to y: ${x ** y}`;
  }
  sqrt(x) {
    return `the square root of x: ${Math.sqrt(x)}`;
  }
}
// create an Instance
const calculate = new Calculator();
console.log(calculate.pi);
console.log(calculate.e);
console.log(calculate.ratio(10, 5, 15));
console.log(calculate.percentage(200, 500));
console.log(calculate.add(200, 500));
console.log(calculate.substract(200, 500));
console.log(calculate.multiply(200, 500));
console.log(calculate.divide(200, 500));
console.log(calculate.modulation(600, 500));
console.log(calculate.elevate(2, 5));
console.log(calculate.sqrt(4));
