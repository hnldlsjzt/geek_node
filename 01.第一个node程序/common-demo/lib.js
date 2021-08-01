// 使用 commonJS 规范书写

exports.hello = 'hello'

// console.log('lib inner');
console.log(exports)

// 修改module上的exports
module.exports = function sum (a, b) {
  return a + b
}
setTimeout(function () {
  console.log(exports)
}, 1000)
