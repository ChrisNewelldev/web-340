/*
  ========================================
  Title:  game-characters.spec.js
  Author: Chris Newell
  Date:   27/07/2025
  Description: Unit tests for GameCharacters class
  ========================================
*/

const { GameCharacters } = require("../src/game-characters");
const path = require("path");

describe("GameCharacters", () => {
  test("should return game characters data", (done) => {
    const gameCharacters = new GameCharacters("game-characters-data.js");

    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty("name");
      expect(data[0]).toHaveProperty("class");
      expect(data[0]).toHaveProperty("level");
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    const gameCharacters = new GameCharacters("non-existent-file.js");

    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeInstanceOf(Error);
      expect(data).toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    const gameCharacters = new GameCharacters("failing-script.js");

    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeInstanceOf(Error);
      expect(data).toBeNull();
      done();
    });
  });
});
