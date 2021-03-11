function EventEmitter() {
  this._events = {}; // 默认给 Eventemitter实例 准备的
}
EventEmitter.prototype.on = function (eventName, callback) {
  if (!this._events) {
    this._events = {};
  }
  (this._events[eventName] || (this._events[eventName] = [])).push(callback);
};
EventEmitter.prototype.emit = function (eventName, ...args) {
  if (this._events && this._events[eventName]) {
    this._events[eventName].forEach((e) => e(...args));
  }
};

module.exports = EventEmitter;
