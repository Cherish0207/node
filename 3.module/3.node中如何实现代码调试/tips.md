### 分析 node 源码

- 根据文件名(绝对路径)创建一个模块

1. 会默认调用 require 语法
2. `Module.prototype.require `模块的原型上有 require 方法
3. `Module._load` 调用模块的加载方法 最终返回的是 module.exports
4. `Module._resolvefilename` 解析文件名,将文件名变成绝对路径 --> 默认尝试添加 .js/.json/.node 后缀找到就返回，没有就抛出错误
5. `Module._cache` 默认会判断是否存在缓存
6. `new Module` 创建模块(对象) id, exports
7. 把模块缓存起来,方便下次使用

- 模块加载

8. trymoduleload 尝试加载模块 module.load
9. `module.paths` 第三方模块查找的路径
10. 获取当前模块的扩展名，根据扩展名调用对应的方法 `Module._extensions` 策略模式
11. 获取文件的内容
12. 调用 `module._compile` 方法
13. 将用户的内容包到一个函数中 `(function(exports, require, module, __filename, __dirname){})`
14. 最终返回的是 `module.exports` 用户会给这个 module. exports 进行赋值

#### 注意 module.exports 和 exports 的区别

源码：

```js
let exports = module.exports;
fn();
return module.exports;
```

正确写法

```js
module.exports.a = 1;
exports.a = 1;
```

错误写法

```js
exports = { a: 1 };
exports = "hello";
```
