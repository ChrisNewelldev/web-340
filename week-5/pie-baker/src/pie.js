/**
 * Author: Chris Newell
 * Date: 07/26/2025
 * File Name: pie.js
 * Description: Function to bake pies with required ingredients.
 */

"use strict";

function bakePie(pieType, ingredients) {
  const essentials = ["flour", "sugar", "butter"];
  const missing = essentials.filter((item) => !ingredients.includes(item));

  if (missing.length > 0) {
    return `Cannot bake ${pieType} pie. Missing ingredients: ${missing.join(
      ", "
    )}`;
  } else {
    return `Successfully baked a ${pieType} pie!`;
  }
}

module.exports = { bakePie };
