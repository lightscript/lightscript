const chalk = require('chalk')
const { spawnSync, execFileSync } = require('child_process')

const run = (str, useExec = false) => {
  console.log(chalk.white.bgBlack(str))
  const [ cmd, ...args ] = str.split(' ')
  if (useExec) {
    execFileSync(cmd, args)
  } else {
    const { status } = spawnSync(cmd, args, { stdio: 'inherit' })
    if (status !== 0) process.exit()
  }
}
module.exports = run;
module.exports.run = run;

const lernaExec = (cmd, useExec = false) => run(`lerna exec -- ${cmd}`, useExec)

module.exports.lernaExec = lernaExec;
