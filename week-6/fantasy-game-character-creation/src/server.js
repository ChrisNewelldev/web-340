/**
 * Author: Chris Newell
 * Date: July 26, 2025
 * File Name: server.js
 * Description: Node.js server for fantasy character creation
 */

const http = require("http");
const url = require("url");

let currentCharacter = null;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  res.setHeader("Content-Type", "text/plain");

  if (pathname === "/create" && req.method === "POST") {
    const { class: charClass, gender, fact } = query;

    if (!charClass || !gender || !fact) {
      res.statusCode = 400;
      res.end("Missing required character fields.");
      return;
    }

    currentCharacter = {
      class: charClass,
      gender,
      fact,
    };

    res.statusCode = 200;
    res.end(`Character created: ${charClass}, ${gender}, fun fact: ${fact}`);
  } else if (pathname === "/confirm" && req.method === "POST") {
    if (!currentCharacter) {
      res.statusCode = 400;
      res.end("No character to confirm.");
    } else {
      res.statusCode = 200;
      res.end("Character creation confirmed.");
    }
  } else if (pathname === "/view" && req.method === "GET") {
    if (!currentCharacter) {
      res.statusCode = 404;
      res.end("No character found.");
    } else {
      res.statusCode = 200;
      res.end(
        `Your character: ${currentCharacter.class}, ${currentCharacter.gender}, fact: ${currentCharacter.fact}`
      );
    }
  } else {
    res.statusCode = 404;
    res.end("Route not found.");
  }
});

module.exports = server;
