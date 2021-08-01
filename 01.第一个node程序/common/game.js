const actions = ['rock', 'scissor', 'paper']
module.exports = function (input) {
  if (!actions?.includes(input)) {
    console.error('\x1B[31m', '请输入rock或paper或scissor')
    return null;
  } else {
    const round = Math.random() * 3
    let computerAction = actions[Math.floor(round)] // 电脑出招
    console.log('电脑:', computerAction, 'PK', '人:', input)
    if (computerAction === input) {
      console.log('\x1B[33m', '平局-_-')
      return 0
    } else if (
      (computerAction === 'rock' && input === 'scissor') ||
      (computerAction === 'scissor' && input === 'paper') ||
      (computerAction === 'paper' && input === 'rock')
    ) {
      console.log('\x1B[31m', '你输了-__-')
      return 1
    } else {
      console.log('\x1B[32m', '你赢了！！！')
      return -1
    }
  }
}
