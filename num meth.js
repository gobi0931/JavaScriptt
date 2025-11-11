// toString()(It converts numbers to string)
let num1 = 10;
let num2 = 20;
let total = num1 + num2;
console.log(total.toString());
// toString() with Bases
let num = 255;
console.log(num.toString(16));
let z = 345;
console.log(z.toString(2))
// toFixed(n)(Rounds to n decimal places and return it as a string)
let css = 99.999;
console.log(css.toFixed(2));
let distance = 12.34567;
console.log(distance.toFixed(3));
let bill = 5.1;
console.log(bill.toFixed(4))
let ide = 12345.6789;
console.log(ide.toFixed(3));
// toPrecision(n)(Formats to n total digits)
let int = 9.8765;
console.log(int.toPrecision(3));
let NUM = 12345.6789;
console.log(NUM.toPrecision(4));
let small = 0.00123456;
console.log(small.toPrecision(2));
// valueOf()(Returns the number itself)
let numObj = new Number(50);
console.log(numObj.valueOf());
// parseInt()(Converts string to integer)
console.log(parseInt("42px"));
console.log(parseInt("43.87px"));
// parseFloat()(Converts string to floating number)
console.log(parseFloat("42.5px"));
// Number()(It converts a string in to number)
let value = "25";
console.log(Number(value)); 
// isNaN()(checks whether something can’t be converted into a number)
console.log(isNaN("hello"));
// Number.isInteger()(checks if a value is a whole number)
console.log(Number.isInteger(5.0));
console.log(Number.isInteger(5.5));
// Number.isNaN()(checks only actual NaN values, not just anything non-numeric.It’s a more accurate version of isNaN())
console.log(Number.isNaN(NaN)); 
console.log(Number.isNaN("hello")); 