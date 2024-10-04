// app.js
import { add, subtract } from './math.js';

const num1 = 10;
const num2 = 5;

const additionResult = add(num1, num2);
const subtractionResult = subtract(num1, num2);

console.log(`Addition: ${num1} + ${num2} = ${additionResult}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtractionResult}`);
