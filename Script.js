// // console.log("Hello World!");
// // setTimeout(() => {
// //   console.log("Hello World!");
// // }, 5000)
// // console.log("Hello World!");
// function disBlock() {
//   console.log(`Do you know about this`);
// }

// function multiples(a, b) {
//   console.log(`I am ${a * b} years old`)
// }
// const result = multiples(5, 5)
// disBlock(result);


// //TODO Topic 1 for example CallBack function
// function calculate(x, y, callback) {
//   setTimeout(() => {
//     console.log("Executed.... ");
//     const sum = x + y
//     callback(sum)
//   }, 2500)
// }
// function display(result) {
//   console.log(`Answer  = ${result}`);
// }
// calculate(100, 50, display)//You can write calculate(100,50,function(result) {
// //console.log(`Answer  = ${result}`);

// //TODO Topic 2 for example CallBack function
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

// const url1 = "TaiChi.dev/file1.Json"
// function download(url, callback) {
//   console.log(`downloading from Url....${url}`);
//   setTimeout(() => {
//     callback(url)
//   }, 2500)
// }
// function complete(result) {
//   console.log(`finish ${result} download`);
// }
// download(url1, complete);

const url1 = "TaiChi.dev/file1.Json" 
function download(url, callback) {
  console.log(`downloading from Url....${url}`);
  setTimeout(() => {
    callback(url)
  }, 2500)
}
download(url1, function (result) {
  console.log(`finish ${result} download`);
});