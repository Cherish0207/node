const EventEmitter = require("events");
const utils = require("util"); // util.promisify / util.inherits
function Person(name) {
  this.name = name;
}
utils.inherits(Person, EventEmitter);
let p = new Person();
console.log(p.on);
