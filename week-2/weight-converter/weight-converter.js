#!/usr/bin/env node

const [, , input] = process.argv;

if (!input) {
  console.error("Usage: node weight-converter.js <pounds>");
  process.exit(1);
}

const pounds = parseFloat(input);

if (isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

const kilograms = pounds * 0.453592;
console.log(kilograms.toFixed(2)); // Includes \n automatically
