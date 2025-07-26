/**
 * Author: Chris Newell
 * Date: 07/26/2025
 * File Name: taco-stand.js
 * Description: TacoStandEmitter class with 3 custom methods using EventEmitter.
 */

const EventEmitter = require("events");

class TacoStandEmitter extends EventEmitter {
  serveCustomer(name) {
    this.emit("serve", name);
  }

  prepareTaco(type) {
    this.emit("prepare", type);
  }

  handleRush(location) {
    this.emit("rush", location);
  }
}

module.exports = TacoStandEmitter;
