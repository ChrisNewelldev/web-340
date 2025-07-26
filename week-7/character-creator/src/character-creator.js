/**
 * Author: Chris Newell
 * Date: 2025-07-26
 * File Name: character-creator.js
 * Description: Duplex stream class for fantasy character creation.
 */

"use strict";

const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.buffer = [];
  }

  _write(chunk, encoding, callback) {
    const input = chunk.toString().trim();
    if (input === "") {
      this.emit("error", new Error("Invalid input: empty string"));
    } else {
      const transformed = input.toUpperCase();
      this.buffer.push(transformed);
      callback();
    }
  }

  _read(size) {
    if (this.buffer.length > 0) {
      this.push(this.buffer.shift());
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;
