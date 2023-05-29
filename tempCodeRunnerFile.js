function calculate(x, y, callback) {
  setTimeout(() => {
    console.log("Executed.... ");
    const sum = x + y
    callback(sum)
  }, 2500)
}
calculate(100, 50, function (result) {
  console.log(`Answer  = ${result}`);
})