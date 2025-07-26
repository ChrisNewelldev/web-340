/**
 * Author: Chris Newell
 * Date: 07/26/2025
 * File Name: index.js
 * Description: Demonstrates the functionality of the recipe module.
 */

const recipes = require("./recipes");

console.log(recipes.createRecipe(["eggs", "flour", "milk"]));
console.log(recipes.setTimer(10));
console.log(recipes.quit());
