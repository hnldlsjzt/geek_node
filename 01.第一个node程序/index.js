// console.log('hello world');
// console.log(Date);
// console.log(Math);

// // 定时器相关
// console.log(setTimeout);
// console.log(setInterval);
// // console.log(requestAnimationFrame);
// // node环境没有 requestAnimationFrame,
// // 但为了弥补，提供了 setImmediate
// console.log(setImmediate);

// console.log(__filename);// 当前 文件 路径
// console.log(__dirname);// 当前 文件夹 路径
// console.log(process);

// 石头剪刀布游戏

const input = process.argv[2] // 获取命令行输入的参数

// const actions = {
//   rock: 'rock', // 石头
//   scissor: 'scissor', // 剪刀
//   paper: 'paper' // 布
// }
// console.log('argv', input)
const actions = ['rock', 'scissor', 'paper']
if (!actions?.includes(input)) {
  console.error('\x1B[31m', '请输入rock或paper或scissor')
} else {
  const round = Math.random() * 3
  //   let computerAction = '' // 电脑出招
  //   if (round < 1) {
  //     // 电脑出石头
  //     computerAction = 'rock'
  //   } else if (round > 1 && round > 2) {
  //     // 电脑出剪刀
  //     computerAction = 'scissor'
  //   } else {
  //     // 电脑出布
  //     computerAction = 'paper'
  //   }
  let computerAction = actions[Math.floor(round)] // 电脑出招
  console.log('电脑:', computerAction, 'PK', '人:', input)
  if (computerAction === input) {
    console.log('\x1B[33m','平局-_-')
  } else if (
    (computerAction === 'rock' && input === 'scissor') ||
    (computerAction === 'scissor' && input === 'paper') ||
    (computerAction === 'paper' && input === 'rock')
  ) {
    console.log('\x1B[31m','你输了-__-')
  } else {
    console.log('\x1B[32m','你赢了！！！')
  }
}
