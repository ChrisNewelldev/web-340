/**
 * Author: Chris Newell
 * Date: 07/26/2025
 * File Name: server.spec.js
 * Description: Unit tests for fantasy character creation server
 */

"use strict";

const http = require("http");
const server = require("../src/server");

let app;

beforeAll((done) => {
  app = server.listen(3000, done);
});

afterAll((done) => {
  app.close(done);
});

function makeRequest(path, method = "GET", callback) {
  const options = {
    hostname: "localhost",
    port: 3000,
    path,
    method,
  };

  const req = http.request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => callback(res, data));
  });

  req.on("error", (err) => {
    console.error(err);
    callback(null, null);
  });

  req.end();
}

test("POST /create returns 200 and contains character data", (done) => {
  makeRequest(
    "/create?class=Warrior&gender=Male&fact=Loves%20dragons",
    "POST",
    (res, data) => {
      expect(res.statusCode).toBe(200);
      expect(data).toMatch(/Warrior/);
      expect(data).toMatch(/Male/);
      expect(data).toMatch(/dragons/);
      done();
    }
  );
});

test("POST /confirm returns 200 and confirmation message", (done) => {
  makeRequest("/confirm", "POST", (res, data) => {
    expect(res.statusCode).toBe(200);
    expect(data).toMatch(/confirmed/i);
    done();
  });
});

test("GET /view returns 200 and shows character", (done) => {
  makeRequest("/view", "GET", (res, data) => {
    expect(res.statusCode).toBe(200);
    expect(data).toMatch(/character/i);
    done();
  });
});
