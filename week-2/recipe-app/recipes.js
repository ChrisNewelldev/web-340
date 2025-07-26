/**
 * Author: Chris Newell
 * Date: 07/26/2025
 * File Name: recipes.js
 * Description: Defines and exports recipe-related functions using CommonJS.
 */

// Define the createRecipe function
function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(", ")}`;
}

// Define the setTimer function
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  return "Program exited";
}

// Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit,
};
