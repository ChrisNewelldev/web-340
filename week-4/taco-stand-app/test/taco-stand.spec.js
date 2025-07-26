/**
 * Author: Chris Newell
 * Date: 07/26/2025
 * File Name: taco-stand.spec.js
 * Description: Unit tests for TacoStandEmitter methods using assert module.
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

const tacoStand = new TacoStandEmitter();

function testServeCustomer() {
  let message = "";
  tacoStand.once("serve", (name) => {
    message = `Customer ${name} has been served.`;
  });

  tacoStand.serveCustomer("Alice");
  assert.strictEqual(message, "Customer Alice has been served.");
  console.log("Passed testServeCustomer");
}

function testPrepareTaco() {
  let message = "";
  tacoStand.once("prepare", (type) => {
    message = `Preparing a ${type} taco.`;
  });

  tacoStand.prepareTaco("chicken");
  assert.strictEqual(message, "Preparing a chicken taco.");
  console.log("Passed testPrepareTaco");
}

function testHandleRush() {
  let message = "";
  tacoStand.once("rush", (location) => {
    message = `Rush of customers at ${location} location!`;
  });

  tacoStand.handleRush("Downtown");
  assert.strictEqual(message, "Rush of customers at Downtown location!");
  console.log("Passed testHandleRush");
}

// Run tests
testServeCustomer();
testPrepareTaco();
testHandleRush();
