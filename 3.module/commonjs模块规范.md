### node 中 commonjs 规范为什么定义成这样，为什么要有 export/require 语法的产生

#### 1.掌握 node 中如何实现代码调试

[调试指南](https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/)

- 1.可以在浏览器中进行调试

  > 调试某些模块，如 webpack 可以使用这种方式
  > `node --inspect- brk 1.test.js`
  > chrome://inspect/#devices

- ✅ 2.直接使用 webstorm 和 vscode 自带调试方式
  > launch.json
  ```json
  {
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "启动程序",
        "skipFiles": ["<node_internals>/**"],
        "cwd": "${workspaceFolder}",
        "program": "${workspaceFolder}/3.module/3.node中如何实现代码调试/test.js"
      }
    ]
  }
  ```
- 3.在控制台中调试

