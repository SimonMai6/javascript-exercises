const add = function(numOne, numTwo) {
  let additionSum = numOne + numTwo;
  return additionSum;
	
};

const subtract = function(numOne, numTwo) {
	let subtractSum = numOne - numTwo;
  return subtractSum;
};

const sum = function(arr) {
  let sum = arr.reduce((total, currentNum) => total + currentNum, 0);
  return sum;
	
};

const multiply = function(arr) {
  let multiplySum = arr.reduce((total, currentNum) => total * currentNum, 1);
  return multiplySum;
};

const power = function(numOne, numTwo) {
	let powerSum = Math.pow(numOne,numTwo);
  return powerSum
};

const factorial = function(num) {
  const arr = ([...Array(num+1).keys()]);
  arr.shift();
  let factorialSum = arr.reduce((total, currentNum) => total * currentNum, 1);
  return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
