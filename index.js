class Calculator {
  constructor() {
    //Properties
    this.PI = 3.141592653589793;
    this.E = 2.718281828459045;
  }

  //getter
  //pi and e getters that return formatted strings with the respective values
  get pi() {
    return `PI: ${this.PI}`;
  }
  get e() {
    return `Euler's number: ${this.E}`;
  }

  //methods
  //ratio method that calculates the height on a given ratio of x and y with a given width
  ratio(x, y, width) {
    const height = (width / x) * y;
    return `height is ${height} on ratio: ${x}:${y}`;
  }
  // percentage method that returns the percentage of x in y
  percentage(x, y) {
    return `the percentage of x in y: ${((x / y) * 100).toFixed(2)}%`;
  }
  //addition method returns addition of x and y
  add(x, y) {
    return `the sum of x and y: ${x + y}`;
  }
  //subtract method returns subtraction of x and y
  subtract(x, y) {
    return `the difference of x subtracted from y: ${y - x}`;
  }
  //multiply method returns multiple of x and y
  multiply(x, y) {
    return `the product of x multiplied by y: ${x * y}`;
  }
  //!the divide and modulation methods throw an error if the divisor is set to 0, to avoid the division by zero error.
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
  //elevate method returns power of x
  elevate(x, y) {
    return `the power of x elevated to y: ${x ** y}`;
  }
  // sqrt method returns square root of x
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
console.log(calculate.subtract(200, 500));
console.log(calculate.multiply(200, 500));
console.log(calculate.divide(200, 500));
console.log(calculate.modulation(600, 500));
console.log(calculate.elevate(2, 5));
console.log(calculate.sqrt(4));
