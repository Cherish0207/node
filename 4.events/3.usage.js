const EventEmitter = require("./EventEmitter");
const utils = require("util"); // util.promisify / util.inherits
function Girl(name) {
  this.name = name;
}
utils.inherits(Girl, EventEmitter);

let girl = new Girl();
function cry(name) {
  console.log(name + " 哭");
}
function eat(name) {
  console.log(name + " 吃");
}
girl.once("女生失恋", cry);
girl.once("女生失恋", eat);
girl.off("女生失恋", cry);// cry 没被移除掉
console.dir(girl._events);
girl.emit("女生失恋", "lucas");
girl.emit("女生失恋", "小美");
