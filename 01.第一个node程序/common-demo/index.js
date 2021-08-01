console.log('start common')
const lib = require('./lib')
console.log('require', lib)
console.log('end common')

lib.add = function add (a, b) {
  return a + b
}
