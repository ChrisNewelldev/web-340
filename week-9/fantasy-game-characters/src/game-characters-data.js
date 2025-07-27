/*
  ========================================
  Title:  game-characters-data.js
  Author: Chris Newell
  Date:   27/07/2025
  Description: Outputs game character data as a JSON string
  ========================================
*/

const characters = [
  { name: "Aragorn", class: "Ranger", level: 20 },
  { name: "Gandalf", class: "Wizard", level: 99 },
  { name: "Legolas", class: "Archer", level: 18 },
  { name: "Gimli", class: "Warrior", level: 17 },
];

console.log(JSON.stringify(characters));
