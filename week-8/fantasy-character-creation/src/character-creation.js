/*
  ========================================
  Title:  character-creation.js
  Author: Chris Newell
  Date:   27/07/2025
  Description: Character creation system using fs module
  ========================================
*/

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "characters.json");

function createCharacter(character, callback) {
  fs.readFile(filePath, "utf8", (readErr, data) => {
    let characters = [];

    if (!readErr && data) {
      try {
        characters = JSON.parse(data);
      } catch (parseErr) {
        return callback(parseErr);
      }
    }

    characters.push(character);

    fs.writeFile(filePath, JSON.stringify(characters, null, 2), (writeErr) => {
      if (writeErr) return callback(writeErr);
      callback(null);
    });
  });
}

function getCharacters(callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return callback(err, null);

    try {
      const characters = JSON.parse(data);
      callback(null, characters);
    } catch (parseErr) {
      callback(parseErr, null);
    }
  });
}

module.exports = { createCharacter, getCharacters };
