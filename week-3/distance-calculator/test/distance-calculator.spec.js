/**
 * Author: Chris Newell
 * Date: 07/26/2025
 * File Name: distance-calculator.spec.js
 * Description: Unit tests for the distance calculator using assert module.
 */

const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

function testEarthToMars() {
  const expectedValue = 0.52;
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), expectedValue);
    console.log("Passed testEarthToMars");
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
  }
}

function testVenusToEarth() {
  const expectedValue = 0.28;
  try {
    assert.strictEqual(calculateDistance("Venus", "Earth"), expectedValue);
    console.log("Passed testVenusToEarth");
  } catch (error) {
    console.error(`Failed testVenusToEarth: ${error.message}`);
  }
}

function testEarthToNeptune() {
  const expectedValue = 29.05;
  try {
    assert.strictEqual(calculateDistance("Earth", "Neptune"), expectedValue);
    console.log("Passed testEarthToNeptune");
  } catch (error) {
    console.error(`Failed testEarthToNeptune: ${error.message}`);
  }
}

// Run all tests
testEarthToMars();
testVenusToEarth();
testEarthToNeptune();
