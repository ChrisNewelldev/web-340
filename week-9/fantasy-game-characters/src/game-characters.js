/*
  ========================================
  Title:  game-characters.js
  Author: Chris Newell
  Date:   27/07/2025
  Description: GameCharacters class that retrieves data from a child process
  ========================================
*/

const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(scriptFile) {
    this.scriptPath = path.join(__dirname, scriptFile);
  }

  getCharacters(callback) {
    const child = spawn("node", [this.scriptPath]);

    let output = "";
    let errorOutput = "";

    child.stdout.on("data", (data) => {
      output += data.toString();
    });

    child.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    child.on("error", (err) => {
      console.error("Error spawning child process:", err.message);
      callback(err, null);
    });

    child.on("close", (code) => {
      if (code !== 0 || errorOutput) {
        console.error("Child process failed:", errorOutput);
        callback(
          new Error(errorOutput || "Child process exited with code " + code),
          null
        );
      } else {
        try {
          const characters = JSON.parse(output);
          callback(null, characters);
        } catch (parseErr) {
          console.error("Failed to parse output:", parseErr.message);
          callback(parseErr, null);
        }
      }
    });
  }
}

module.exports = { GameCharacters };
