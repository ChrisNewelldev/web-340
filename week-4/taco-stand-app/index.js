/**
 * Author: Chris Newell
 * Date: 07/26/2025
 * File Name: index.js
 * Description: CLI interface for the Taco Stand using readline and event emitters.
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./src/taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Set up event listeners
tacoStand.on("serve", (name) => {
  console.log(`Customer ${name} has been served.`);
});

tacoStand.on("prepare", (type) => {
  console.log(`Preparing a ${type} taco.`);
});

tacoStand.on("rush", (location) => {
  console.log(`Rush of customers at ${location} location!`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const arg = args.join(" ");

  switch (command) {
    case "serve":
      tacoStand.serveCustomer(arg);
      break;
    case "prepare":
      tacoStand.prepareTaco(arg);
      break;
    case "rush":
      tacoStand.handleRush(arg);
      break;
    default:
      console.log(`Unknown command: ${command}`);
  }

  console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);
