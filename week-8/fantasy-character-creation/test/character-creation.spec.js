/*
  ========================================
  Title:  character-creation.spec.js
  Author: Chris Newell
  Date:   27/07/2025
  Description: Unit tests for character creation system
  ========================================
*/

const fs = require("fs");
const path = require("path");
const { createCharacter, getCharacters } = require("../src/character-creation");

const filePath = path.join(__dirname, "../src/characters.json");

describe("Character Creation System", () => {
  beforeEach((done) => {
    fs.writeFile(filePath, "[]", done);
  });

  test("should create a new character and write to file", (done) => {
    const newCharacter = {
      name: "Elandril",
      class: "Mage",
      gender: "Other",
      detail: "Carries a book bound in dragon skin",
    };

    createCharacter(newCharacter, (err) => {
      expect(err).toBeNull();

      fs.readFile(filePath, "utf8", (readErr, data) => {
        expect(readErr).toBeNull();
        const characters = JSON.parse(data);
        expect(characters.length).toBe(1);
        expect(characters[0].name).toBe("Elandril");
        done();
      });
    });
  });

  test("should read characters from file", (done) => {
    const sampleData = [
      {
        name: "Throg",
        class: "Warrior",
        gender: "Male",
        detail: "Wields a giant axe",
      },
    ];

    fs.writeFile(filePath, JSON.stringify(sampleData), () => {
      getCharacters((err, characters) => {
        expect(err).toBeNull();
        expect(Array.isArray(characters)).toBe(true);
        expect(characters.length).toBe(1);
        expect(characters[0].name).toBe("Throg");
        done();
      });
    });
  });

  test("should handle JSON parse error gracefully", (done) => {
    fs.writeFile(filePath, "{ invalid JSON", () => {
      getCharacters((err, characters) => {
        expect(err).toBeInstanceOf(Error);
        expect(characters).toBeNull();
        done();
      });
    });
  });
});
