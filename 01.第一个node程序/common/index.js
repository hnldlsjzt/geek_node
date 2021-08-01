const game = require('./game')

let winCount = 0
// 获取进程的标准输入
process.stdin.on('data', buffer => {
  console.log(buffer, buffer.toString())
  const input = buffer.toString().trim()
  const res = game(input)
  if (res === -1) {
    winCount++
  }
  if (winCount >= 3) {
    console.log('恭喜你通关，我不玩了~')
    process.exit()
    console.log('进程退出')
  }
})
