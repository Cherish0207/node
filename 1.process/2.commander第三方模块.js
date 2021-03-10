// 解析用户的参数
// commander TJ
// yarn webpack
const commander = require("commander");
const program = new commander.Command();

program
  .version("1.0.0")
  .option("-p,--port <v>", "set your port")
  .option("-c,--config <v>", "set your config");
program.parse(process.argv);
console.log(program);
// console.log(program.opts());

// program

//   .option("-d, --debug", "output extra debugging")
//   .option("-s, --small", "small pizza size")
//   .option("-p, --pizza-type <type>", "flavour of pizza");
// // console.log(program.parse);
// let r =program.parse(process.argv);
// console.log(r);
