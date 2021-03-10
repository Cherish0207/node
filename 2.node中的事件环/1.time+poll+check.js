const fs = require('fs');
const { nextTick } = require('process');
fs.readFile('gitlog.txt',(err, data)=>{
  console.log(data);
  setTimeout(()=>{
    console.log("setTimeout");
  })
  setImmediate(() => {
    console.log("setImmediate");
  });
  nextTick(()=>{
    console.log("nextTick");
  })
})