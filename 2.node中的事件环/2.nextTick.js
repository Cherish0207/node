setTimeout(() => {
  console.log(1);
  Promise.resolve().then(() => {
    console.log("Promise");
  });
  process.nextTick(() => {
    console.log("nextTick");
  });
});
