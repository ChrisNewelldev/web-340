/**
 * Author: Chris Newell
 * Date: 07/26/2025
 * File Name: pie.spec.js
 * Description: Unit tests for bakePie function using assert module.
 */

"use strict";

const assert = require("assert");
const { bakePie } = require("../src/pie");

function testBakesSuccessfully() {
  try {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
    assert.strictEqual(result, "Successfully baked a apple pie!");
    console.log("✅ testBakesSuccessfully passed");
  } catch (err) {
    console.error(`❌ testBakesSuccessfully failed: ${err.message}`);
  }
}

function testFailsWithoutButter() {
  try {
    const result = bakePie("cherry", ["flour", "sugar", "cherries"]);
    assert.strictEqual(
      result,
      "Cannot bake cherry pie. Missing ingredients: butter"
    );
    console.log("✅ testFailsWithoutButter passed");
  } catch (err) {
    console.error(`❌ testFailsWithoutButter failed: ${err.message}`);
  }
}

function testFailsWithMultipleMissing() {
  try {
    const result = bakePie("pumpkin", ["flour"]);
    assert.strictEqual(
      result,
      "Cannot bake pumpkin pie. Missing ingredients: sugar, butter"
    );
    console.log("✅ testFailsWithMultipleMissing passed");
  } catch (err) {
    console.error(`❌ testFailsWithMultipleMissing failed: ${err.message}`);
  }
}

testBakesSuccessfully();
testFailsWithoutButter();
testFailsWithMultipleMissing();
