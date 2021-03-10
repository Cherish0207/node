// 1.变量替换 -- 正则
// 2.去某个空间下取值 with
// 3.让字符串转成js执行 new Function
const path = require("path");
const fs = require("fs");
const renderFile = (filePath, obj, cb) => {
  fs.readFile(filePath, "utf8", (err, html) => {
    if (err) return cb(err, html);
    html = html.replace(/\{\{([^}]+)\}\}/g, (...args) => {
      let key = args[1].trim();
      return obj[key];
    });
    cb(null, html);
  });
};
renderFile(
  path.resolve(__dirname, "myTemplate.html"),
  { name: "cherish", age: 18, arr: [1, 2, 3] },
  (err, data) => {
    console.log(err, data);
  }
);
