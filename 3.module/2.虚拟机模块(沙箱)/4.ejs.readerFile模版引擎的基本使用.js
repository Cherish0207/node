const ejs = require("ejs");
const path = require("path");

ejs.renderFile(
  path.resolve(__dirname, "template.html"),
  { name: "cherish", age: 18, arr: [1, 2, 3] },
  (err, data) => {
    console.log(err, data);
  }
);
