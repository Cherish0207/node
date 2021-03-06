function EventEmitter() {
  this._events = {}; // 默认给 Eventemitter实例 准备的
}
EventEmitter.prototype.on = function (eventName, callback) {
  if (!this._events) {
    this._events = {};
  }
  // newlistener以外的事件，需要触发 newlistener的回调
  if (eventName !== "newListener") {
    this.emit("newListener", eventName);
  }
  (this._events[eventName] || (this._events[eventName] = [])).push(callback);
};
EventEmitter.prototype.emit = function (eventName, ...args) {
  if (this._events && this._events[eventName]) {
    this._events[eventName].forEach((e) => e(...args));
  }
};
EventEmitter.prototype.off = function (eventName, callback) {
  if (this._events && this._events[eventName]) {
    this._events[eventName] = this._events[eventName].filter(
      (cb) => cb != callback && cb.l != callback
    );
  }
};
// once: 多次触发，只执行一次
EventEmitter.prototype.once = function (eventName, callback) {
  // 切片
  // 箭头函数保证this
  const once = (...args) => {
    // 绑定一个一次性事件,稍后触发时,再将事件清空
    callback(...args);
    this.off(eventName, once);
  };
  once.l = callback;
  this.on(eventName, once);
};
module.exports = EventEmitter;
