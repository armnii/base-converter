const converters = require("./converter.js");
const reader = require("readline-sync");

const decimal = reader.questionInt("Please enter a number with base 10 = ");



console.log("In Binary = " + converters.convertToBinary(decimal));
console.log("In Hexa = " + converters.convertToHexa(decimal));







