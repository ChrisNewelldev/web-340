/**
 * Author: Chris Newell
 * Date: 2025-07-26
 * File Name: character-creator.spec.js
 * Description: Jest test suite for the CharacterCreator duplex stream.
 */

"use strict";

const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    characterCreator.write("wizard");
    characterCreator.end();

    let output = "";

    characterCreator.on("data", (chunk) => {
      output += chunk.toString();
    });

    characterCreator.on("end", () => {
      expect(output).toBe("WIZARD");
      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on("error", (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Invalid input: empty string");
      done();
    });

    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    characterCreator.write("rogue");
    characterCreator.write("mage");
    characterCreator.end();

    const results = [];

    characterCreator.on("data", (chunk) => {
      results.push(chunk.toString());
    });

    characterCreator.on("end", () => {
      expect(results).toEqual(["ROGUE", "MAGE"]);
      done();
    });
  });
});
